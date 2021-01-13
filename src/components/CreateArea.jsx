import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';



function CreateArea({ onAdd }) {
  const [note, setNote] = useState({
    // state to keep track of change
    title: "",
    content: ""
  });
  const [click, setClick] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target; // desturcturing
    //  console.log({ name, value })
    setNote((prevValue) => {
      return { ...prevValue, [name]: value }; // updating the title or content
    }); // spred operator to avoid if else
    // more of react way.
  }

  function submitNote(event) {
    onAdd(note);
    event.preventDefault(); // to prevent default refreshing of page when clicked
    setNote({
      title: "",
      content: ""
    });
  }

  function expanded() {
    setClick(true);
  };

  return (
    <div>
      <form className="create-note">

        {click ?                            // conditional rendering
          <input
            name="title" // to identify the element
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
            autocomplete="off"
          /> : null}


        <textarea
          onClick={expanded}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={click ? 3 : 1}
        />

        <Zoom in={click}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>



      </form>
    </div>
  );
}

export default CreateArea;
