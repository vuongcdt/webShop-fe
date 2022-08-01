import {
    statusToIndex,
    statusToIndexFailed,
} from '../../../../../utils/helpers';
import ProgressItem from './ProgressOrder/ProgressItem';

function ProgressOrderStatus({ status }) {
    const orderStatusIndex =
        status === 'failed'
            ? statusToIndexFailed(status)
            : statusToIndex(status);
    return (
        <ol className="progtrckr">
            {status === 'failed' ? (
                <>
                    <ProgressItem
                        status={'pending'}
                        orderStatusIndex={orderStatusIndex}
                        title={'Pending'}
                        isFailed={true}
                    />
                    <ProgressItem
                        status={'failed'}
                        orderStatusIndex={orderStatusIndex}
                        title={'Failed'}
                        isFailed={true}
                    />
                    <ProgressItem
                        status={'cancelled'}
                        orderStatusIndex={orderStatusIndex}
                        title={'Cancelled'}
                        isFailed={true}
                    />
                </>
            ) : (
                <>
                    <ProgressItem
                        status={'pending'}
                        orderStatusIndex={orderStatusIndex}
                        title={'Pending'}
                    />
                    <ProgressItem
                        status={'on-hold'}
                        orderStatusIndex={orderStatusIndex}
                        title={'On-Hold'}
                    />
                    <ProgressItem
                        status={'processing'}
                        orderStatusIndex={orderStatusIndex}
                        title={'Processing'}
                    />
                    <ProgressItem
                        status={'shipping'}
                        orderStatusIndex={orderStatusIndex}
                        title={'Shipping'}
                    />
                    <ProgressItem
                        status={'completed'}
                        orderStatusIndex={orderStatusIndex}
                        title={'Completed'}
                    />
                    {status === 'refunded' ? (
                        <ProgressItem
                            status={'refunded'}
                            orderStatusIndex={orderStatusIndex}
                            title={'Refunded'}
                        />
                    ) : (
                        <></>
                    )}
                </>
            )}
        </ol>
    );
}

export default ProgressOrderStatus;
