import {useState, useCallback} from 'react';
import Button from '@material-ui/core/Button';

export function CreateFormPost() {
    const [formState] = useState({
        title: '',
        description: ''
    });
    const handlePostSubmit = useCallback(evt => {
        evt.preventDefault();

        fetch('localhost:4000/posts', {
            method: "post",

        })
        return false;
    }, [])
    return (
        <form onSubmit={handlePostSubmit}>
            <input
                type="text"
                placeholder="Enter title"
                name="title"
                value={formState.title}
                required
            />
            <input
                type="text"
                placeholder="Enter Description"
                name="description"
                value={formState.description}
                required
            />
            <Button>CreatePost</Button>
        </form>
    )
}