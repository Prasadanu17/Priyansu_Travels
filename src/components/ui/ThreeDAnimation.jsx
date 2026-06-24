

export default function ThreeDAnimation({ className = '' }) {
  return (
    <div className={`compass-scene ${className}`}>
      <div className="compass-wrapper">
        <div className="compass-body">
          <div className="compass-dial">
            <div className="compass-markers" />
            <div className="compass-direction compass-n">N</div>
            <div className="compass-direction compass-s">S</div>
            <div className="compass-direction compass-e">E</div>
            <div className="compass-direction compass-w">W</div>
            <div className="compass-needle">
              <div className="needle-north" />
              <div className="needle-south" />
            </div>
            <div className="compass-center-pin" />
          </div>
          <div className="compass-glass" />
        </div>
      </div>
    </div>
  );
}
