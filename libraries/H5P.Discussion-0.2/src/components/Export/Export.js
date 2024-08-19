import React, {useRef} from 'react';
import {useDiscussionContext} from 'context/DiscussionContext';
import {escapeHTML, stripHTML} from '../utils';

function Export() {

  const context = useDiscussionContext();
  const {
    translate
  } = context;
  const exportContainer = useRef();
  let exportDocument;
  let exportObject;

  function getExportObject() {
    const {
      params: {
        header,
        description,
        summaryHeader,
      },
      behaviour: {
        provideSummary = true,
      },
      translations,
      collectExportValues,
    } = context;

    const {
      resources,
      summary,
      userInput
    } = collectExportValues();

    return Object.assign({}, translations, {
      mainTitle: header,
      description: stripHTML(description),
      summaryHeader,
      hasResources: resources && resources.length > 0,
      useSummary: provideSummary,
      hasSummaryComment: summary && summary.length > 0,
      summaryComment: summary,
      resources: resources,
      unprocessedArguments: userInput.categories
        .filter((category) => category.isArgumentDefaultList)
        .map((category) => category.connectedArguments)
        .reduce((acc, val) => acc.concat(val), []),
      proArguments: userInput.categories
        .filter((category) => category.id === 'pro')
        .map((category) => category.connectedArguments.map((argumentId) => userInput.argumentsList[argumentId]))
        .reduce((acc, val) => acc.concat(val), []),
      contraArguments: userInput.categories
        .filter((category) => category.id === 'contra')
        .map((category) => category.connectedArguments.map((argumentId) => userInput.argumentsList[argumentId]))
        .reduce((acc, val) => acc.concat(val), []),
    });
  }

  function getExportPreview() {
    const documentExportTemplate =
            '<div class="export-preview">' +
            '<div class="page-header" role="heading" tabindex="-1">' +
            ' <div class="page-title h1">{{mainTitle}}</div>' +
            '</div>' +
            '<div class="page-description">{{description}}</div>' +
            '<table class="page-pro-arguments">' +
            '<tr><th>{{argumentsFor}}</th></tr>' +
            '<tr><td><ul>{{#proArguments}}<li>{{argumentText}}</li>{{/proArguments}}</ul>{{^proArguments}}{{noArguments}}{{/proArguments}}</td></tr>' +
            '</table>' +
            '<table class="page-contra-arguments">' +
            '<tr><th>{{argumentsAgainst}}</th></tr>' +
            '<tr><td><ul>{{#contraArguments}}<li>{{argumentText}}</li>{{/contraArguments}}</ul>{{^contraArguments}}{{noArguments}}{{/contraArguments}}</td></tr>' +
            '</table>' +
            '{{#useSummary}}' +
            '{{#hasSummaryComment}}' +
            '<div class="h2">{{summaryHeader}}</div>' +
            '<p>{{summaryComment}}</p>' +
            '{{/hasSummaryComment}}' +
            '{{/useSummary}}' +
            '{{#hasResources}}' +
            '<div class="h2">{{resourceHeader}}</div>' +
            '<table class="page-resources">' +
            '<tr><th>{{resourceHeaderTitle}}</th><th>{{resourceHeaderIntro}}</th><th>{{resourceHeaderUrl}}</th></tr>' +
            '{{#resources}}<tr><td>{{title}}</td><td>{{introduction}}</td><td>{{url}}</td></tr>{{/resources}}' +
            '</table>' +
            '{{/hasResources}}' +
            '</div>';

    return Mustache.render(documentExportTemplate, exportObject);
  }

  function handleExport() {
    const {
      translate,
    } = context;

    exportObject = getExportObject();

    context.triggerXAPIScored(0, 0, 'completed');

    exportDocument = new H5P.ExportPage(
      escapeHTML(exportObject.mainTitle),
      getExportPreview(),
      H5PIntegration.reportingIsEnabled || false,
      escapeHTML(translate('submitText')),
      escapeHTML(translate('submitConfirmedText')),
      escapeHTML(translate('selectAll')),
      escapeHTML(translate('export')),
      H5P.instances[0].getLibraryFilePath('exportTemplate.docx'),
      exportObject
    );
    exportDocument.getElement().prependTo(exportContainer.current);
    H5P.$window.on('resize', () => exportDocument.trigger('resize'));
  }

  return (
    <>
      <button
        className={'h5p-discussion-button-export'}
        onClick={handleExport}
        type={'button'}
      >
        <span
          className={'h5p-ri hri-document'}
        />
        {translate('createDocument')}
      </button>
      <div className={'export-container'} ref={exportContainer}/>
    </>
  );
}

export default Export;
