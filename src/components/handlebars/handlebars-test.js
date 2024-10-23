import template from './handlebars-template.hbs';

const handlebarsTest = (node) => {
    const data = {
        person: {
            firstname: 'Yehuda',
            lastname: 'Katz',
        },
    };
    const html = template(data);
    node.innerHTML = html;
};

export default handlebarsTest;
