export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>Contacts</h1>
        <div>
            <form id="" role="search">
                <input
                 type="search" 
                 id="q"
                 aria-aria-label="Search contacts"
                 placeholder="Search"
                 name="q"
                />
                <div id="search-spinner" aria-hidden hidden={true}>
                    <div className="sr-only" aria-live="polite"></div>
                </div>
            </form>
            <form method="form">
                <button type="submit">New</button>
            </form>
        </div>
        <nav>
          <ul>
            <li>
              <a href={`/contacts/1`}>Your Name</a>
            </li>
            <li>
              <a href={`/contacts/2`}>Your Friend</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  );
}
