import Two from './Two'

const One = ({ data }) => {
    return (
        <div>
            <h1>I'm component one</h1>
            <Two data={data} />
        </div>
    );
}

export default One;