import {
    statusToIndex,
    statusToIndexFailed,
} from '../../../../../../utils/helpers';

function ProgressItem({ status, orderStatusIndex, title, isFailed }) {
    const statusIndex = isFailed
        ? statusToIndexFailed(status)
        : statusToIndex(status);
    return (
        <li
            className={`progtrckr-${
                orderStatusIndex >= statusIndex ? 'done' : 'todo'
            }`}
        >
            <h5>{title}</h5>
        </li>
    );
}

export default ProgressItem;
