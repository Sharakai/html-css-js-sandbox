import styles from './App.css';

function Header() {
    const element = document.createElement('div');
    element.innerHTML = 'Hello Matt!';
    element.className = styles.header
    return element;
}

function Content() {
    const container = document.createElement('div');
    container.className = styles.content;

    const column1 = document.createElement('div');
    column1.innerHTML = 'Column 1';
    column1.className = styles.column1;
    container.appendChild(column1);

    const column2 = document.createElement('div');
    column2.innerHTML = 'Column 2';
    column2.className = styles.column2;
    container.appendChild(column2);

    return container;
}

function Footer() {
    const element = document.createElement('div');
    element.innerHTML = 'This is a footer';
    element.className = styles.footer;
    return element;
}

const root = document.getElementById('root');

root.appendChild(Header());
root.appendChild(Content());
root.appendChild(Footer());
