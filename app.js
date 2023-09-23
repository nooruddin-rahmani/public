const pb = new PocketBase('https://azda.hop.sh');
async function test() {
    const auth = await pb.admins.authWithPassword('nooruddin.rahmani100@gmail.com', 'N1@nooruddin')
}

document.getElementById('myForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;
    const input3 = document.getElementById('input3').value;
    const input4 = document.getElementById('input4').value;

    const formData = {
        "personnel_name": input1,
        "personnel_responsibility": input2,
        "personnel_report": input3,
        "personnel_comment": input4
    };

    pb.collection('personnel_reports').create(formData);
    document.getElementById('myForm').reset();


});
test()