const DesktopHeader = () => (
  <header className="max-w-[1440px] mx-auto">
    <div className="flex bg-primary">
      <div className="flex">
        <p>лого</p>
        <nav className="flex">
          <ul className="flex">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
          <div>tel</div>
        </nav>
      </div>
    </div>
    <div className="flex">
      <div>catalog</div>
      <div>search</div>
      <div className="flex">
        <div>language</div>
        <ul className="flex">
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
    </div>
  </header>
);

export default DesktopHeader;
