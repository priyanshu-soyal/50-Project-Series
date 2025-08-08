import "./Write.css"

export default function Write() {
  return (
    <div className='write'>
        <img src="https://plus.unsplash.com/premium_photo-1673286712645-9600beaa4a92?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8" alt="" />
        <form className="writeForm">
            <div className="formGroup">
                <label htmlFor="fileInput"> 
                <i className="fa-solid fa-plus fileIcon"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}}/>
                <input type="text" placeholder="Title"  className="writeInput" autoFocus={true}/>
            </div>
            <div className="formGroup">
                <textarea type="text" placeholder="Tell your story..." className="writeInput writeText"></textarea>
            </div>
            <button className="writeSubmit">
                Publish
            </button>
        </form>
    </div>
  )
}
