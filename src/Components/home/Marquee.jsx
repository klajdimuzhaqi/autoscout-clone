const Marquee = ({ items, direction = "left", speed = 20 }) => {
    
    return (
        <div className="marquee">
            <div
                className={`marquee__track ${direction}`}
                style={{ animationDuration: `${speed}s` }}
            >
                {[...items, ...items].map((item, index) => (
                    <span className="marquee__item" key={index}>
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Marquee;
