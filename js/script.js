// Used on the résumé to make the employment history interactive (each job is clickable)
document.addEventListener('DOMContentLoaded', function () {
    // Placeholder array with employment history data
    const employmentHistory = [
        { id: 1, title: 'Regulatory & Compliance Specialist', company: 'Tech Elevator', years: 'APRIL 2023 - JUNE 2023', description: 'Responsible for owning the regulatory workflows for military workforce funding programs. Primary responsibilities included mapping approval timelines, identifying challenges and dependencies, and tracking ownership. This role was included in a 25% reduction in company workforce.' },
        { id: 2, title: 'Military Transition Specialist III', company: 'Galvanize', years: 'MARCH 2021 - NOVEMBER 2022', description: 'Developed an exclusive student support program for up to 60 transitioning service members participating in an 18-week software development program training future military software engineering talent, providing full-cycle guidance to succeed.' },
        { id: 3, title: 'Software Engineer Specialist, Military', company: 'Galvanize', years: 'SEPTEMBER 2020 - MARCH 2021', description: 'Co-instructor for a pioneering 12-week Software Engineering Immersive (SEI) program, overseeing 28 active-duty military students in a remote learning environment. Facilitating lectures, projects, office hours, and grading assignments.' },
        { id: 4, title: 'Software Engineer Intern', company: 'Galvanize', years: 'MAY 2020 - JUNE 2020', description: 'Software Engineer part of a small team working to learn unfamiliar technologies.' },
        { id: 5, title: 'Patriot Missile Defense Systems Operator (14h)', company: 'US Army', years: 'OCTOBER 2016 - MARCH 2020', description: 'Dedicated team leader with an exemplary service record in operating and maintaining the highly advanced Patriot missile defense system. Proficient in all aspects of system deployment, operation, and maintenance, with a demonstrated ability to execute complex missions under pressure.' },
        { id: 6, title: 'Guest Service Attendant', company: 'Target', years: 'DECEMBER 2014 - SEPTEMBER 2016', description: 'Demonstrated proficient cash register operations, ensuring accurate transactions, validating coupons, and offering friendly assistance. Quickly progressed to guest services, handling returns, addressing escalated issues, managing inventory, and securing cash transactions.' }
    ];

    const timeline = document.getElementById('timeline');

    // Create timeline entries
    employmentHistory.forEach(job => {
        // Entry container for job
        const entry = document.createElement('div');
        entry.className = 'entry';
        entry.id = 'entry-' + job.id;

        // Title header for job
        const header = document.createElement('div');
        header.className = 'entry-header';
        header.innerText = job.title;

        // Content container for job, initially hidden
        const content = document.createElement('div');
        content.className = 'entry-content';
        content.innerHTML = `<strong>Company:</strong> ${job.company}<br>
                             <strong>Years:</strong> ${job.years}<br>
                             <p>${job.description}</p>`;
        content.style.display = 'none';

        // Append header and content to the entry
        entry.appendChild(header);
        entry.appendChild(content);

        // Event listener to toggle content visibility
        header.addEventListener('click', function () {
            // Check if the clicked header's content is currently shown
            const isContentShown = content.style.display === 'block';
            // Hide all open contents
            document.querySelectorAll('.entry-content').forEach(el => {
                el.style.display = 'none'; // Hide content
            });
            // Deactivate all headers
            document.querySelectorAll('.entry').forEach(el => {
                el.classList.remove('active'); // Remove active class
            });

            if (!isContentShown) {
                // If it was not shown before, display it
                content.style.display = 'block';
                entry.classList.add('active');
            } // If it was shown, it will be hidden as part of the above loop
        });

        timeline.appendChild(entry);
    });
});