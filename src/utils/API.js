import axios from 'axios';

const contactForm = async (name, email, message) =>
  axios.post(`https://ssg-portfolio-server.herokuapp.com/api/contact-form`, { name, email, message });

const downloadFile = async () => {
  axios({
    url: 'https://ssg-portfolio-server.herokuapp.com/api/resume',
    method: 'GET',
    responseType: 'blob',
  }).then((response) => {
    // create file link in browser's memory
    const href = URL.createObjectURL(response.data);

    // create "a" HTML element with href to file & click
    const link = document.createElement('a');
    link.href = href;
    link.setAttribute('download', 'sara-seoane-garcia-resume.pdf');
    document.body.appendChild(link);
    link.click();

    // clean up "a" element & remove ObjectURL
    document.body.removeChild(link);
    URL.revokeObjectURL(href);
  });
}

export { contactForm, downloadFile };
