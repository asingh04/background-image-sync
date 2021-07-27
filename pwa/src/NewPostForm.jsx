function NewPostForm() {
    return (
        <div id="side-form" className="sidenav side-form">
            <form className="add-post container section">
                <h6>New Post</h6>
                <div className="divider" />
                <div className="input-field">
                    <input type="text" id="title" className="validate" placeholder="Title of the post" />
                    <label htmlFor="title">Title</label>
                </div>

                <div className="input-field">
                    <input type="text" id="caption" className="validate" placeholder="Caption"  />
                    <label htmlFor="caption">Caption</label>
                </div>
                <div className="input-field center">
                    <input type="file" name="image" id="image" />
                    <label htmlFor="image">Add Image</label>
                </div>
                <div className="input-field center">
                    <button className="btn-small">Post</button>
                </div>
            </form>

        </div>
    )
}

export default NewPostForm
