import { Form } from "react-router-dom";

export default function Contact() {
  const contact = {
    first: "Your",
    last: "Name",
    avatar: "https://placekitten.com/g/200/200",
    twitter: "your_handle",
    notes: "Some notes",
    favorite: true,
  };

  return (
    <div id="contact">
      <div>
        <img key={contact.avatar} src={contact.avatar || null} />
      </div>

      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite contact={contact}/>
        </h1>

        {contact.twitter && (
          <p>
            <a href={`https://twitter.com/${contact.twitter}`} target="_blank">
              {contact.twitter}
            </a>
          </p>
        )}

        <div>
          <form action="edit">
            <button type="submit">Edit</button>
          </form>
          <form
            action="destroy"
            method="post"
            onSubmit={(event) => {
              if (!confirm("Please confirm you want to delete this record")) {
                event.preventDefault;
              }
            }}
          >
            <button type="submit">Delete</button>
          </form>
        </div>
      </div>
    </div>
  );
}

function Favorite ({ contact }) {
    let favorite = contact.favorite;
    return (
        <Form method="post">
            <button name="favorite" value={favorite ? "false" : "true"}
            aria-label={
                favorite ? "Remove from favorites" : "Add to favorites"
            }
            >
               {favorite ? "⭐" : "☆"} 
            </button>
        </Form>
    )
};

// Favorite({});
