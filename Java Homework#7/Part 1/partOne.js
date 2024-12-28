function displayUserInfo() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const userInfo = `First Name: ${firstName}, Last Name: ${lastName}, Email: ${email}, Password: ${password}`;
    const paragraph = document.createElement('p');
    paragraph.textContent = userInfo;
    const output = document.getElementById('output');
    output.innerHTML = '';
    output.appendChild(paragraph);
}