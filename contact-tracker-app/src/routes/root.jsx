import { Outlet, Link } from "react-router-dom";
import { getContacts } from "../contacts"

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
              <Link to={`contacts/1`}>Your Name</Link>
            </li>
            <li>
              <Link to={`/contacts/2`}>Your Friend</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}

export async function loader() {
  const contacts = await getContacts();
  return { contacts };
}
