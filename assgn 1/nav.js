export let frst = React.createElement(
  'div',
  { id: 'nv1' },
  [
    React.createElement('img', {
        src: 'icon.png',
        alt: 'Logo'
      }),
    React.createElement('h5', null, 'About me'),
    React.createElement('h5', null, 'Potfolio'),
    React.createElement('h5', null, 'Services'),
    React.createElement('h5', null, 'Blog')
  ]
);

export let scnd = React.createElement('div', 
    null, 
    React.createElement('a', {
        id: 'bk',
        href: '#'
    }, 
    ['Book a call', React.createElement('i', {className: "ri-arrow-right-up-line"}) ]))