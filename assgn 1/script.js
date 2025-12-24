import {frst, scnd} from './nav.js'


const root = ReactDOM.createRoot(document.querySelector('#root'));

const parent = React.createElement('div', {id: 'nav'}, [frst, scnd])

let bottom = React.createElement(
  'div',
  { id: 'bom' },
  [
    React.createElement('div', {id: 'ln'}, [
        React.createElement('h4', {id: '24'}, 'Product Designer'),
        React.createElement('div', {id: 'ln1'}, ),
        React.createElement('h4', {id: 'pd'}, '2004')
    ]),

    React.createElement('div', {id: 'blck2'}, [
        React.createElement('div', {id: 'frs'}, [
            React.createElement('div', {className: 't25'}, [
                React.createElement('h2', null, '+200'),
                React.createElement('p', null, 'Project completed')
            ]),
            React.createElement('div', {className: 't25'}, [
                React.createElement('h2', null, '+50'),
                React.createElement('p', null, 'Startup raised')
            ])
        ]),
        React.createElement('div', {id: 'sec'}, [
            React.createElement('h1', {id: 'hl'}, 'Hello'),
            React.createElement('p', {id: 'D.Nova'}, "- it's D.Nova a design wizard")
        ]),
        React.createElement('div', {id: 'thr'}, [
            React.createElement('h5', {id: 'sd'}, ['Scroll Down', React.createElement('i', {className: "ri-arrow-down-line"}) ]) 
        ])
    ]),

    React.createElement('img', {
        src: 'potfolio.png'
    }, ),
  ]
);

const parent2 = React.createElement('div', {id: 'all'}, [parent, bottom])

root.render(parent2);