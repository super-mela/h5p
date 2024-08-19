import { registerWidget } from 'h5p-utils';
import { H5PWrapper } from './H5P/H5PWrapper';
import './styles.scss';

registerWidget('TopicMap', 'topicMap', H5PWrapper);
