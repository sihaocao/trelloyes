// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });



import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './card';
import List from './list';

describe('Card component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<Card title='First Card' content='Something...' />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });


    it('renders without crashing', () => {
        const div = document.createElement('div');
        const props = {
            cards: [
                {
                    id: 'a',
                    title: 'First card',
                    content: 'lorem ipsum'
                }
            ]
        }
        ReactDOM.render(<List {...props} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const props = {
            cards: [
                {
                    id: 'a',
                    title: 'First card',
                    content: 'lorem ipsum'
                }
            ]
        }

        const tree = renderer
          .create(<List header='First List' {...props} />)
          .toJSON();
        expect(tree).toMatchSnapshot();
    });
});