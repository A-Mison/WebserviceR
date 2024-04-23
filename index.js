fetch('resume.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('name').textContent = data.personalInfo.name;
    document.getElementById('email').textContent = data.personalInfo.email;
    document.getElementById('phone').textContent = data.personalInfo.phone;
    document.getElementById('location').textContent = data.personalInfo.location;

    const skills = data.skills.map(skill => `<li>${skill.description}</li>`).join('');
    document.getElementById('skills').innerHTML = skills;

    const achievements = data.achievements.map(achievement => `<li>${achievement}</li>`).join('');
    document.getElementById('achievements').innerHTML = achievements;

    const education = data.education.map(edu => `<li>${edu.school} - ${edu.year}</li>`).join('');
    document.getElementById('education').innerHTML = education;

    const projects = data.projects.map(project => `<li>${project}</li>`).join('');
    document.getElementById('projects').innerHTML = projects;

    const activities = data.activities.map(activity => `<li>${activity}</li>`).join('');
    document.getElementById('activities').innerHTML = activities;
  });
