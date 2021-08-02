import useSize from './hooks/useSize';

const DeviceCheck = () => {
    const size = useSize();
    return (
        <div>
            { size.width < 480? 'Mobile View': 'Desktop View '}
        </div>
    )
};

export default DeviceCheck;