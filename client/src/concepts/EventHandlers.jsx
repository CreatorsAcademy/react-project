import "../form.css"; //css selectors will applicable for entire page

export default function EventHandlers() {
  /* const button = document.querySelector("button");
    button.addEventListener("click", ()=>{

    }) */

  const handleSave = (event) => {
    console.log("button clicked", event);
  };

  return (
    <form
      onSubmit={(event) => {
        console.log("on submit click");

        event.preventDefault(); //stop default behavior
      }}
    >
      <div className="field-container">
        <label htmlFor="firstname">First Name </label>
        <input
          type="text"
          name="firstname"
          onChange={(evt) => {
            console.log("first name changed", evt.target.value);
          }}
        />
      </div>
      <div className="field-container">
        <label htmlFor="lastname">Last Name </label>
        <input
          type="text"
          name="lastname"
          onChange={(evt) => {
            console.log("last name changed", evt.target.value);
          }}
        />
      </div>
      <div className="action-buttons">
        <button type="button" onClick={handleSave}>
          Save Details
        </button>
        {/* <button type="button" onClick={() => handleSave(2, 4, 6)}>
        Save Details
      </button> */}
        <button>Submit</button>
      </div>
    </form>
  );
}
