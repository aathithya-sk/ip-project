// Daily Planner Logic
function addTask() {
    const taskInput = document.getElementById('new-task').value;
    const taskList = document.getElementById('task-list');

    if (taskInput) {
        const newTask = document.createElement('li');

        // Task text
        const taskText = document.createElement('span');
        taskText.textContent = taskInput;
        newTask.appendChild(taskText);

        // Add a space between task text and timer
        newTask.appendChild(document.createElement('br')); // This creates a line break

        // Timer for the task
        const timer = document.createElement('span');
        timer.className = 'timer';
        timer.textContent = '24:00:00'; // 24 hours for daily tasks
        newTask.appendChild(timer);

        // Remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = function() {
            taskList.removeChild(newTask);
            updateDashboard();
        };
        newTask.appendChild(removeButton);

        taskList.appendChild(newTask);
        startCountdown(timer, 24 * 60 * 60); // Start a 24-hour countdown
        document.getElementById('new-task').value = '';
        updateDashboard();
    }
}

// Weekly Planner Logic
function addWeeklyGoal() {
    const goalInput = document.getElementById('new-weekly-goal').value;
    const goalList = document.getElementById('weekly-goal-list');

    if (goalInput) {
        const newGoal = document.createElement('li');

        const goalText = document.createElement('span');
        goalText.textContent = goalInput;
        newGoal.appendChild(goalText);

        // Add a space between goal text and timer
        newGoal.appendChild(document.createElement('br')); // This creates a line break

        const timer = document.createElement('span');
        timer.className = 'timer';
        timer.textContent = '168:00:00'; // 7 days for weekly goals
        newGoal.appendChild(timer);

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = function() {
            goalList.removeChild(newGoal);
            updateDashboard();
        };
        newGoal.appendChild(removeButton);

        goalList.appendChild(newGoal);
        startCountdown(timer, 7 * 24 * 60 * 60); // Start a 7-day countdown
        document.getElementById('new-weekly-goal').value = '';
        updateDashboard();
    }
}

// Monthly Planner Logic
function addMonthlyObjective() {
    const objectiveInput = document.getElementById('new-monthly-objective').value;
    const objectiveList = document.getElementById('monthly-objective-list');

    if (objectiveInput) {
        const newObjective = document.createElement('li');

        const objectiveText = document.createElement('span');
        objectiveText.textContent = objectiveInput;
        newObjective.appendChild(objectiveText);

        // Add a space between objective text and timer
        newObjective.appendChild(document.createElement('br')); // This creates a line break

        const timer = document.createElement('span');
        timer.className = 'timer';
        timer.textContent = '720:00:00'; // 30 days for monthly objectives
        newObjective.appendChild(timer);

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = function() {
            objectiveList.removeChild(newObjective);
            updateDashboard();
        };
        newObjective.appendChild(removeButton);

        objectiveList.appendChild(newObjective);
        startCountdown(timer, 30 * 24 * 60 * 60); // Start a 30-day countdown
        document.getElementById('new-monthly-objective').value = '';
        updateDashboard();
    }
}

// Countdown Timer Logic
function startCountdown(timerElement, durationInSeconds) {
    let timeRemaining = durationInSeconds;

    const interval = setInterval(() => {
        if (timeRemaining <= 0) {
            clearInterval(interval);
            timerElement.textContent = 'Expired';
        } else {
            timeRemaining--;
            const hours = Math.floor((timeRemaining % (24 * 60 * 60)) / (60 * 60));
            const minutes = Math.floor((timeRemaining % (60 * 60)) / 60);
            const seconds = timeRemaining % 60;
            timerElement.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }
    }, 1000);

    // Stop the timer if the task is removed
    timerElement.parentElement.querySelector('button[onclick^="remove"]').onclick = () => {
        clearInterval(interval);
        timerElement.parentElement.remove();
        updateDashboard();
    };
}

// Dashboard (Progress Overview)
function updateDashboard() {
    const taskCount = document.getElementById('task-list').children.length;
    const weeklyGoalCount = document.getElementById('weekly-goal-list').children.length;
    const monthlyObjectiveCount = document.getElementById('monthly-objective-list').children.length;

    document.getElementById('completed-tasks').textContent = taskCount;
    document.getElementById('completed-weekly-goals').textContent = weeklyGoalCount;
    document.getElementById('completed-monthly-objectives').textContent = monthlyObjectiveCount;
}

// Update dashboard after every task is added
setInterval(updateDashboard, 1000);