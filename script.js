// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Scroll to Workouts Section
function scrollToWorkouts() {
    const workoutsSection = document.getElementById('top-workouts');
    workoutsSection.scrollIntoView({ behavior: 'smooth' });
}

// TDEE Calculator
const tdeeForm = document.getElementById('tdee-form');
const tdeeResult = document.getElementById('tdee-result');

tdeeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const age = parseFloat(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const activity = parseFloat(document.getElementById('activity').value);

    // Calculate BMR (Basal Metabolic Rate)
    let bmr;
    if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    // Calculate TDEE
    const tdee = Math.round(bmr * activity);

    // Display results
    tdeeResult.innerHTML = `
        <p>Your Basal Metabolic Rate (BMR): ${Math.round(bmr)} calories/day</p>
        <p>Your Total Daily Energy Expenditure (TDEE): ${tdee} calories/day</p>
        <div class="calorie-targets">
            <h4>Calorie Targets:</h4>
            <p>Maintenance: ${tdee} calories/day</p>
            <p>Weight Loss (0.5kg/week): ${tdee - 500} calories/day</p>
            <p>Weight Loss (1kg/week): ${tdee - 1000} calories/day</p>
            <p>Weight Gain (0.5kg/week): ${tdee + 500} calories/day</p>
        </div>
    `;
});

// Video Tutorials
const videoCards = document.querySelectorAll('.video-card');
videoCards.forEach(card => {
    card.addEventListener('click', () => {
        const videoTitle = card.querySelector('h3').textContent;
        alert(`Loading ${videoTitle}... Video content coming soon!`);
    });
});

// Meal Plan Selection
const mealPlanButtons = document.querySelectorAll('.view-plan-button');
mealPlanButtons.forEach(button => {
    button.addEventListener('click', () => {
        const mealPlanCard = button.closest('.meal-plan-card');
        const planName = mealPlanCard.querySelector('h3').textContent;
        alert(`You've selected the ${planName}! Detailed meal plan coming soon.`);
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add scroll event listener for navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(44, 62, 80, 0.9)';
    } else {
        navbar.style.backgroundColor = 'var(--primary-color)';
    }
});

// Workout Plan Details
const workoutButtons = document.querySelectorAll('.view-details-button');
workoutButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const workoutPlans = [
            {
                title: 'Full Body Strength',
                content: `
                    <h3>Full Body Strength Workout Plan</h3>
                    <p>This beginner-friendly plan focuses on building overall strength and muscle endurance.</p>
                    <h4>Workout Schedule:</h4>
                    <ul>
                        <li>Monday: Full Body Workout A</li>
                        <li>Wednesday: Full Body Workout B</li>
                        <li>Friday: Full Body Workout C</li>
                    </ul>
                    <h4>Workout A:</h4>
                    <ul>
                        <li>Squats: 3 sets x 10 reps</li>
                        <li>Push-ups: 3 sets x 8-10 reps</li>
                        <li>Dumbbell Rows: 3 sets x 10 reps</li>
                        <li>Plank: 3 sets x 30 seconds</li>
                        <li>Lunges: 3 sets x 10 reps per leg</li>
                    </ul>
                    <h4>Workout B:</h4>
                    <ul>
                        <li>Deadlifts: 3 sets x 8 reps</li>
                        <li>Dumbbell Shoulder Press: 3 sets x 10 reps</li>
                        <li>Lat Pulldowns: 3 sets x 10 reps</li>
                        <li>Russian Twists: 3 sets x 15 reps</li>
                        <li>Step-ups: 3 sets x 10 reps per leg</li>
                    </ul>
                    <h4>Workout C:</h4>
                    <ul>
                        <li>Bench Press: 3 sets x 8 reps</li>
                        <li>Romanian Deadlifts: 3 sets x 10 reps</li>
                        <li>Pull-ups (assisted if needed): 3 sets x 6-8 reps</li>
                        <li>Bicycle Crunches: 3 sets x 15 reps</li>
                        <li>Box Jumps: 3 sets x 8 reps</li>
                    </ul>
                    <h4>Rest Periods:</h4>
                    <ul>
                        <li>60-90 seconds between sets</li>
                        <li>2-3 minutes between exercises</li>
                    </ul>
                    <h4>Progression:</h4>
                    <ul>
                        <li>Increase weight by 2.5-5 lbs when you can complete all sets with good form</li>
                        <li>Add 1-2 reps to each set when you can't increase weight</li>
                        <li>Progress to more challenging variations as you get stronger</li>
                    </ul>
                `
            },
            {
                title: 'Cardio & Core',
                content: `
                    <h3>Cardio & Core - Complete Plan</h3>
                    <h4>Day 1, 3:</h4>
                    <ul>
                        <li>Jump Rope: 3 sets x 2 minutes</li>
                        <li>Mountain Climbers: 3 sets x 20 reps</li>
                        <li>High Knees: 3 sets x 1 minute</li>
                    </ul>
                    <h4>Day 2, 4:</h4>
                    <ul>
                        <li>Russian Twists: 3 sets x 15 reps</li>
                        <li>Bicycle Crunches: 3 sets x 20 reps</li>
                        <li>Plank Variations: 3 sets x 30 seconds</li>
                    </ul>
                `
            },
            {
                title: 'Upper/Lower Split',
                content: `
                    <h3>Upper/Lower Split - Complete Plan</h3>
                    <h4>Upper Body Days:</h4>
                    <ul>
                        <li>Bench Press: 4 sets x 8-10 reps</li>
                        <li>Pull-ups: 3 sets x 6-8 reps</li>
                        <li>Shoulder Press: 3 sets x 10-12 reps</li>
                        <li>Bicep Curls: 3 sets x 12 reps</li>
                        <li>Tricep Dips: 3 sets x 12 reps</li>
                    </ul>
                    <h4>Lower Body Days:</h4>
                    <ul>
                        <li>Deadlifts: 4 sets x 6-8 reps</li>
                        <li>Leg Press: 3 sets x 10-12 reps</li>
                        <li>Lunges: 3 sets x 10 reps per leg</li>
                        <li>Calf Raises: 3 sets x 15 reps</li>
                    </ul>
                `
            },
            {
                title: 'Push/Pull/Legs',
                content: `
                    <h3>Push/Pull/Legs - Complete Plan</h3>
                    <h4>Push Day:</h4>
                    <ul>
                        <li>Barbell Bench Press: 4 sets x 8-10 reps</li>
                        <li>Overhead Press: 3 sets x 8-10 reps</li>
                        <li>Incline Dumbbell Press: 3 sets x 10-12 reps</li>
                        <li>Lateral Raises: 3 sets x 12 reps</li>
                    </ul>
                    <h4>Pull Day:</h4>
                    <ul>
                        <li>Barbell Rows: 4 sets x 8-10 reps</li>
                        <li>Lat Pulldowns: 3 sets x 10-12 reps</li>
                        <li>Face Pulls: 3 sets x 12 reps</li>
                        <li>Bicep Curls: 3 sets x 12 reps</li>
                    </ul>
                    <h4>Legs Day:</h4>
                    <ul>
                        <li>Barbell Squats: 4 sets x 8-10 reps</li>
                        <li>Romanian Deadlifts: 3 sets x 10 reps</li>
                        <li>Leg Curls: 3 sets x 12 reps</li>
                        <li>Calf Raises: 4 sets x 15 reps</li>
                    </ul>
                `
            },
            {
                title: 'High-Intensity Interval Training',
                content: `
                    <h3>HIIT - Complete Plan</h3>
                    <h4>Workout Structure:</h4>
                    <ul>
                        <li>Warm-up: 5 minutes dynamic stretching</li>
                        <li>Circuit 1 (Repeat 3 times):
                            <ul>
                                <li>Burpees: 30 seconds</li>
                                <li>Box Jumps: 30 seconds</li>
                                <li>Rest: 30 seconds</li>
                            </ul>
                        </li>
                        <li>Circuit 2 (Repeat 3 times):
                            <ul>
                                <li>Kettlebell Swings: 30 seconds</li>
                                <li>Battle Ropes: 30 seconds</li>
                                <li>Rest: 30 seconds</li>
                            </ul>
                        </li>
                        <li>Sprint Intervals: 8 x 30 seconds with 1 minute rest</li>
                        <li>Cool-down: 5-10 minutes stretching</li>
                    </ul>
                `
            },
            {
                title: 'Core & Flexibility',
                content: `
                    <h3>Core & Flexibility Workout Plan</h3>
                    <p>This plan focuses on building core strength and improving flexibility through a combination of static and dynamic exercises.</p>
                    <h4>Workout Schedule:</h4>
                    <ul>
                        <li>Monday: Core Focus</li>
                        <li>Wednesday: Flexibility & Mobility</li>
                        <li>Friday: Core & Balance</li>
                        <li>Sunday: Active Recovery & Stretching</li>
                    </ul>
                    <h4>Core Focus (Monday):</h4>
                    <ul>
                        <li>Plank Variations:
                            <ul>
                                <li>Standard Plank: 3 sets x 30-45 seconds</li>
                                <li>Side Plank: 3 sets x 20-30 seconds per side</li>
                                <li>Plank with Leg Lift: 3 sets x 10 reps per leg</li>
                            </ul>
                        </li>
                        <li>Core Circuit (3 rounds):
                            <ul>
                                <li>Russian Twists: 15 reps</li>
                                <li>Leg Raises: 12 reps</li>
                                <li>Bicycle Crunches: 20 reps</li>
                                <li>Mountain Climbers: 30 seconds</li>
                            </ul>
                        </li>
                    </ul>
                    <h4>Flexibility & Mobility (Wednesday):</h4>
                    <ul>
                        <li>Dynamic Warm-up (10 minutes):
                            <ul>
                                <li>Arm Circles</li>
                                <li>Leg Swings</li>
                                <li>Hip Circles</li>
                                <li>Cat-Cow Stretch</li>
                            </ul>
                        </li>
                        <li>Yoga Flow (20 minutes):
                            <ul>
                                <li>Sun Salutations: 3 rounds</li>
                                <li>Warrior Poses: Hold each for 30 seconds</li>
                                <li>Triangle Pose: Hold for 30 seconds each side</li>
                            </ul>
                        </li>
                        <li>Deep Stretching (15 minutes):
                            <ul>
                                <li>Hamstring Stretch: 30 seconds each leg</li>
                                <li>Quad Stretch: 30 seconds each leg</li>
                                <li>Shoulder Stretch: 30 seconds each arm</li>
                                <li>Spinal Twist: 30 seconds each side</li>
                            </ul>
                        </li>
                    </ul>
                    <h4>Core & Balance (Friday):</h4>
                    <ul>
                        <li>Balance Exercises:
                            <ul>
                                <li>Single Leg Stand: 3 sets x 30 seconds per leg</li>
                                <li>Tree Pose: 3 sets x 30 seconds per leg</li>
                                <li>Warrior 3: 3 sets x 20 seconds per leg</li>
                            </ul>
                        </li>
                        <li>Core Circuit (3 rounds):
                            <ul>
                                <li>Superman Hold: 30 seconds</li>
                                <li>Bird Dog: 10 reps per side</li>
                                <li>Dead Bug: 12 reps per side</li>
                                <li>Plank with Arm Reach: 10 reps per arm</li>
                            </ul>
                        </li>
                    </ul>
                    <h4>Active Recovery & Stretching (Sunday):</h4>
                    <ul>
                        <li>Light Cardio: 15-20 minutes (walking, cycling, or swimming)</li>
                        <li>Full Body Stretch Routine (20 minutes):
                            <ul>
                                <li>Neck and Shoulder Stretches</li>
                                <li>Back and Spine Stretches</li>
                                <li>Hip and Leg Stretches</li>
                                <li>Foam Rolling (optional)</li>
                            </ul>
                        </li>
                    </ul>
                    <h4>Progression Tips:</h4>
                    <ul>
                        <li>Increase hold times by 5 seconds each week</li>
                        <li>Add 1-2 reps to each exercise when you can complete all sets with good form</li>
                        <li>Try more challenging variations as you improve</li>
                        <li>Focus on proper breathing throughout all exercises</li>
                    </ul>
                `
            }
        ];
        
        showWorkoutModal(workoutPlans[index].title, workoutPlans[index].content);
    });
});

function showWorkoutModal(title, content) {
    // Create and show modal
    const modal = document.createElement('div');
    modal.className = 'workout-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h2>${title}</h2>
            <div class="workout-content">
                ${content}
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    // Close modal functionality
    const closeModal = modal.querySelector('.close-modal');
    closeModal.addEventListener('click', () => {
        modal.remove();
    });

    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
} 