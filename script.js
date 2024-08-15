const quotes = {
    easy: [
        "The quick brown fox jumps over the lazy dog. The lazy dog looks up and yawns. The fox runs away swiftly.",
        "A journey of a thousand miles begins with a single step. The first step is always the hardest. Keep moving forward.",
        "To be or not to be, that is the question. Whether 'tis nobler in the mind to suffer. The slings and arrows of outrageous fortune.",
        "The rain in Spain stays mainly in the plain. The plain is where the rain falls. The rain is a good thing.",
        "She sells seashells by the seashore. The shells she sells are surely seashells. So if she sells shells on the seashore.",
        "How much wood would a woodchuck chuck? If a woodchuck could chuck wood. He would chuck as much as he could.",
        "The sun rises in the east and sets in the west. It provides light and warmth for the day. The night follows soon after.",
        "The cat sat on the mat. It watched the mouse with great interest. The mouse ran quickly across the floor.",
        "A penny saved is a penny earned. Saving money is a wise habit. It helps in times of need.",
        "The dog barks loudly at the mailman. The mailman delivers letters and packages. The dog wags its tail happily.",
        "Time flies when you’re having fun. Enjoy every moment and make memories. The best moments are often unexpected.",
        "Every cloud has a silver lining. Look for the positive in every situation. Find joy even in difficult times.",
        "You can’t judge a book by its cover. True worth is found inside. Get to know people beyond first impressions.",
        "Actions speak louder than words. Demonstrate your intentions through deeds. Show your commitment by what you do.",
        "The best things in life are free. Cherish moments with loved ones. Enjoy simple pleasures without cost.",
        "A watched pot never boils. Patience is key in waiting. Avoid obsessing over things that need time.",
        "Laughter is the best medicine. Find humor in everyday life. Laughter can improve your mood and health.",
        "Good things come to those who wait. Be patient and persistent. Success often requires time and effort.",
        "The early bird catches the worm. Start your day early to be productive. Morning routines can set a positive tone.",
        "Honesty is the best policy. Always tell the truth and be sincere. Trust is built on honesty and integrity.",
        "Practice makes perfect. Regular practice improves skills. Keep honing your abilities through consistent effort.",
        "A journey of a thousand miles begins with a single step. Take the first step towards your goals. Every journey starts with action.",
        "When one door closes, another opens. Opportunities often arise from setbacks. Be open to new possibilities.",
        "You reap what you sow. The effort you put in will determine your results. Hard work leads to success.",
        "A stitch in time saves nine. Address small problems before they become larger. Prevention is often easier than correction.",
        "The grass is always greener on the other side. Appreciate what you have before seeking more. Contentment comes from within.",
        "Actions speak louder than words. Show your intentions through actions. Words alone do not convey commitment.",
        "Practice makes perfect. Consistent effort leads to improvement. Keep practicing to achieve mastery.",
        "Every rose has its thorn. Beauty often comes with challenges. Embrace imperfections as part of the whole.",
        "The best things in life are free. Enjoy moments with loved ones. Simple pleasures are often the most fulfilling.",
        "When in Rome, do as the Romans do. Adapt to the customs of your surroundings. Respect local traditions and practices.",
        "Fortune favors the bold. Take risks and seize opportunities. Courage often leads to great rewards.",
        "Honesty is the best policy. Be truthful and sincere in all your dealings. Trust is built on honesty and transparency.",
        "Time heals all wounds. Allow yourself time to recover from difficulties. Healing comes with patience and time.",
        "The squeaky wheel gets the grease. Speak up if you need attention. Advocacy often leads to resolution.",
        "The pen is mightier than the sword. Words have great power. Use them wisely to influence and inspire.",
        "A penny saved is a penny earned. Save money whenever possible. Financial prudence leads to stability.",
        "When the going gets tough, the tough get going. Persevere through challenges. Strength and resilience lead to success.",
        "If you can't beat them, join them. Sometimes it's better to adapt. Cooperation can lead to mutual benefits.",
        "Two heads are better than one. Collaborate for better results. Teamwork enhances problem-solving and creativity.",
        "The proof of the pudding is in the eating. Results matter more than promises. Test and verify to ensure quality.",
        "Look before you leap. Assess risks before taking action. Thoughtful consideration prevents mistakes.",
        "Barking up the wrong tree. Pursuing the wrong course of action. Redirect your efforts towards the right goal.",
        "Don't count your chickens before they hatch. Avoid assuming outcomes. Wait until results are certain.",
        "Better late than never. It's never too late to start. Late efforts are better than not trying at all.",
        "You can’t have your cake and eat it too. You may need to make choices. Some decisions involve trade-offs.",
        "Rome wasn't built in a day. Significant achievements require time. Patience and perseverance are essential.",
        "The proof is in the pudding. Outcomes determine the value. Actions and results speak louder than words.",
        "A bird in the hand is worth two in the bush. Appreciate what you have. Sometimes it's better to value the present.",
        "Don't put all your eggs in one basket. Diversify your investments. Spread risks to safeguard your interests.",
        "Time waits for no man. Act promptly and make the most of time. Delay can lead to missed opportunities.",
        "You can lead a horse to water, but you can't make it drink. You can guide, but choices are up to others. Encourage but respect decisions.",
        "A picture is worth a thousand words. Visuals often convey more than text. Use images to enhance communication.",
        "Better safe than sorry. Prioritize safety and caution. Taking precautions prevents unnecessary risks.",
        "Don't judge a book by its cover. Appearances can be misleading. Look beyond the surface to find true value.",
        "The devil is in the details. Attention to detail is crucial. Small elements can significantly impact outcomes.",
        "A leopard can't change its spots. People are often consistent in their nature. Accept individuals as they are.",
        "If it ain't broke, don't fix it. Avoid unnecessary changes. Maintain stability unless improvements are needed.",
        "The best defense is a good offense. Proactive actions can prevent problems. Being prepared is often the best strategy.",
        "Don't bite off more than you can chew. Manage your tasks within capacity. Overextending can lead to problems.",
        "You can't teach an old dog new tricks. Changing habits can be difficult. Be patient with those set in their ways.",
        "Actions have consequences. Every action leads to results. Be mindful of the impact of your behavior.",
        "You can’t make an omelet without breaking eggs. Some actions require sacrifices. Understand the cost of achieving goals.",
        "Don't throw the baby out with the bathwater. Avoid discarding valuable things while removing unwanted elements. Retain what is useful.",
        "The best things in life are free. Value experiences and relationships over material possessions. Find joy in simplicity.",
        "All good things must come to an end. Appreciate moments while they last. Cherish experiences before they pass.",
        "If you want something done right, do it yourself. Taking personal responsibility can ensure quality. Sometimes it's best to handle tasks independently.",
        "The grass is always greener on the other side. Avoid envy and appreciate what you have. Contentment comes from within.",
        "A journey of a thousand miles begins with a single step. Take action towards your goals. Every achievement starts with the first step.",
        "Every cloud has a silver lining. Look for the positive in every situation. Difficult times often bring new opportunities.",
        "A watched pot never boils. Patience is essential in waiting. Avoid fixating on processes; results will come with time."
    ],
    medium: [
        "All that glitters is not gold. The treasure may turn out to be fool’s gold. It is important to seek what is real. Value is not always in appearance. True worth lies within.",
        "The early bird catches the worm, but the second mouse gets the cheese. Timing can be crucial in many aspects of life. Patience is also a valuable trait. Strive for balance and success will follow. Every step matters in the journey.",
        "The pen is mightier than the sword, but words can hurt as much as weapons. Use your words wisely and with kindness. The power of communication is immense. Be mindful of the impact you have. Actions often speak louder than words.",
        "You can lead a horse to water, but you can't make him drink. Encouragement is key to motivation. People must make their own choices. Provide support but respect their decisions. The journey is personal and unique.",
        "The best way to predict the future is to invent it. Innovation drives progress and change. Embrace creativity and take risks. The future is shaped by today's actions. Make each moment count towards your vision.",
        "Time flies when you’re having fun. Enjoy every moment and make memories. The best moments are often unexpected. Cherish the time spent with loved ones. Life is a collection of beautiful experiences.",
        "Actions speak louder than words, but words can inspire actions. Choose your words with care and purpose. Let your actions reflect your true intentions. Inspiration can lead to great achievements. Words and actions together create impact.",
        "A watched pot never boils, but patience can yield results. Trust the process and give things time. Avoid rushing and enjoy the journey. Good things come to those who wait. Keep faith in the unfolding process.",
        "The road less traveled often leads to the greatest adventures. Take risks and explore new paths. Growth comes from stepping out of comfort zones. Life’s greatest experiences are sometimes unexpected. Embrace the journey with curiosity.",
        "Life is 10% what happens to us and 90% how we react to it. Our responses shape our experiences. Approach challenges with a positive mindset. Control what you can and adapt to what you can't. Your attitude determines your direction.",
        "When the going gets tough, the tough get going. Persevere through challenges. Strength and resilience lead to success. Overcoming difficulties often brings growth. Embrace adversity as a path to improvement.",
        "All good things come to those who wait. Patience often leads to rewards. Avoid rushing and allow things to unfold naturally. Success requires time and perseverance. Enjoy the process and the results will follow.",
        "Don't count your chickens before they hatch. Avoid making assumptions about outcomes. Wait until results are confirmed. Be prepared for various scenarios. Planning helps manage expectations.",
        "The grass is always greener on the other side. Appreciate your own circumstances before seeking more. Envy can obscure the value of what you have. Focus on personal contentment and satisfaction.",
        "The proof of the pudding is in the eating. Results reveal the true quality. Test and verify to ensure reliability. Success is measured by outcomes, not promises. Quality is demonstrated through performance.",
        "A stitch in time saves nine, but not always, as the saying goes. Some repairs require more than just a quick fix. Attention to detail and careful work are essential. Overlooking problems can lead to bigger issues. Taking timely action is crucial for success.",
        "Two heads are better than one. Collaborate for improved results. Teamwork often leads to better solutions. Combining skills and knowledge enhances problem-solving. Value diverse perspectives for success.",
        "Fortune favors the bold. Embrace risks and opportunities. Bold actions can lead to great rewards. Courage and decisiveness often pay off. Seize chances and face challenges head-on.",
        "Don't put all your eggs in one basket. Diversify your investments and efforts. Spreading risks can safeguard your interests. Avoid relying on a single approach. Ensure stability through varied strategies.",
        "You can’t make an omelet without breaking eggs. Some achievements require sacrifices. Understand the costs associated with goals. Balance effort with outcomes. Accept necessary trade-offs for success.",
        "If you want something done right, do it yourself. Taking personal responsibility ensures quality. Sometimes individual effort is needed. Relying on others may not always produce desired results. Handle tasks with care and diligence.",
        "Every rose has its thorn. Beauty often comes with challenges. Embrace imperfections as part of the whole. Value both positive and negative aspects. Life’s complexity adds to its richness.",
        "When in Rome, do as the Romans do. Adapt to local customs and practices. Respect traditions and cultural norms. Integration into new environments fosters acceptance. Flexibility enhances relationships and experiences.",
        "The squeaky wheel gets the grease. Advocacy and attention often resolve issues. Be proactive in seeking solutions. Address problems as they arise. Speak up for needed changes or improvements.",
        "Time heals all wounds. Allow yourself and others time to recover. Healing comes with patience and effort. Emotional wounds often need time to mend. Support and understanding aid the healing process.",
        "A bird in the hand is worth two in the bush. Value what you already have. Sometimes it's better to appreciate the present. Avoid chasing uncertain opportunities. Secure what you possess and make the most of it.",
        "Don't throw the baby out with the bathwater. Retain valuable aspects while removing unwanted elements. Ensure that important things are not discarded. Evaluate carefully before making changes. Preserve what is beneficial.",
        "The best defense is a good offense. Being proactive often prevents problems. Prepare and act to avoid potential issues. Strategic actions can mitigate risks. Anticipate challenges and respond effectively.",
        "You reap what you sow. Your efforts determine your outcomes. Invest time and energy to achieve success. Hard work and dedication yield results. What you put in will reflect in what you get.",
        "The devil is in the details. Small elements can significantly impact results. Pay attention to intricate aspects. Thoroughness prevents mistakes. Success often depends on careful consideration.",
        "You can’t teach an old dog new tricks. Changing established habits can be challenging. Be patient with those set in their ways. Adaptation requires effort and willingness. Respect individual differences in learning.",
        "Better late than never. It's better to start late than not at all. Timely action is preferable but never too late. Seize opportunities regardless of timing. Effort counts, even if delayed.",
        "The best things in life are free. Cherish moments with loved ones. Simple pleasures often bring the most joy. Appreciate experiences over material possessions. Find happiness in everyday moments.",
        "Don't bite off more than you can chew. Manage your tasks within your capacity. Avoid overextending yourself. Prioritize and handle responsibilities efficiently. Balance workload to maintain effectiveness.",
        "The grass is always greener on the other side. Avoid envy and appreciate your situation. Contentment comes from within. Focus on the positive aspects of your life. Find joy in what you already have.",
        "You can't teach an old dog new tricks. Changing established habits is difficult. Be patient with those who resist change. Adaptation takes effort and time. Respect personal growth and learning processes.",
        "The early bird catches the worm. Early action often leads to advantages. Set a proactive tone for your day. Morning efforts can set the pace for success. Utilize the early hours for productivity.",
        "A penny saved is a penny earned. Saving money contributes to financial stability. Financial prudence is key to long-term success. Small savings add up over time. Practice good saving habits for future security.",
        "The road less traveled often leads to greater adventures. Explore unconventional paths for unique experiences. Stepping out of comfort zones fosters growth. Embrace new opportunities with curiosity. Enjoy the journey of discovery."
    ],
    hard: [
        "Supercalifragilisticexpialidocious is a word that is quite fabulous. It rolls off the tongue with whimsical delight. Many people find it hard to pronounce correctly. Yet, its charm and length make it memorable. Use it in conversation for a touch of magic. The word often appears in playful contexts. It is both fun and challenging to use.",
        "A stitch in time saves nine, but not always, as the saying goes. Some repairs require more than just a quick fix. Attention to detail and careful work are essential. Overlooking problems can lead to bigger issues. Taking timely action is crucial for success. Assess situations thoroughly before proceeding. Preventive measures often save effort in the long run.",
        "Peter Piper picked a peck of pickled peppers, but where's the peck of pickled peppers? If Peter Piper picked a peck of pickled peppers, then where's the peck of pickled peppers? This tongue-twister is a classic exercise. It tests the agility of your speaking abilities. Practice saying it quickly without stumbling. Enjoy the challenge and the fun of it. It's a great way to improve pronunciation.",
        "A rolling stone gathers no moss, but it might gather some dirt along the way. Constant motion can prevent stagnation but also creates challenges. Balance movement with stability for optimal growth. Progress often requires navigating obstacles. Embrace change but remain grounded. Learn from experiences while continuing to move forward. Every step has its own set of lessons.",
        "To err is human, but to forgive is divine, as the saying suggests. Mistakes are part of the human experience, and forgiveness is a virtue. Learning from errors and letting go of grudges promotes peace. Cultivate understanding and compassion towards others. The act of forgiving can be liberating and healing. Embrace both the human flaws and the power of forgiveness. Strive for personal growth and harmony.",
        "It’s not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change. Adaptability is key in a rapidly changing world. Embrace new ideas and approaches to thrive. Flexibility and resilience are essential traits. Navigate change with an open mind and a proactive attitude. Growth often comes from embracing transformation. Prepare for future challenges with adaptability.",
        "In the end, it's not the years in your life that count, but the life in your years. Live fully and make the most of each moment. Create meaningful experiences and cherish relationships. Quality of life often outweighs mere quantity. Engage in activities that bring joy and fulfillment. Reflect on your accomplishments and cherished memories. Leave a legacy of positivity and impact.",
        "Supercalifragilisticexpialidocious is a word that is used to express something fantastic. It has many syllables and is hard to spell. The word comes from the musical Mary Poppins. It’s often used in a whimsical context. Use it to add flair to your conversation. The word’s complexity adds to its charm. Enjoy the fun of using such an extraordinary term.",
        "A penny saved is a penny earned, but investing wisely is crucial. Accumulating wealth requires strategic planning. Avoid impulsive spending and focus on long-term goals. Financial discipline leads to stability and growth. Regular saving and investing can build wealth over time. Seek advice and educate yourself on financial matters. Make informed decisions to achieve financial success.",
        "You can't judge a book by its cover, as appearances can be deceiving. True value lies within the content rather than outward looks. Assess people and situations based on deeper understanding. Avoid superficial judgments and seek meaningful connections. The essence of things often goes beyond the surface. Embrace the opportunity to explore and learn more. Genuine worth is discovered through experience.",
        "Don't put all your eggs in one basket, as diversification reduces risk. Spread investments and efforts across various areas. Avoid over-reliance on a single source or strategy. Diversification can safeguard against potential losses. Evaluate options and distribute resources wisely. Adapt to changes and explore multiple avenues. Balance is key to managing risks and opportunities.",
        "Actions have consequences, and every choice impacts outcomes. Consider the potential results of your decisions. Be mindful of how your actions affect others. The path you choose determines your future. Evaluate choices carefully and weigh their impact. Take responsibility for the outcomes of your actions. Thoughtful decision-making leads to better results.",
        "When life gives you lemons, make lemonade and add a touch of zest. Transform challenges into opportunities with creativity. Embrace adversity with a positive outlook. Innovation often arises from overcoming difficulties. Add flavor and excitement to everyday situations. Find joy in turning obstacles into achievements. Let challenges inspire your resilience and resourcefulness.",
        "The best defense is a good offense, but preparation is also essential. Anticipate potential threats and act proactively. Implement strategies to stay ahead of potential issues. Proactive measures can prevent problems before they arise. Balance offense with solid planning and preparedness. Act decisively to maintain control and achieve goals. Success often depends on strategic foresight and action.",
        "The grass is always greener on the other side, but it’s important to appreciate your own situation. Avoid envy and focus on your own growth. Cultivate satisfaction with your current circumstances. Value what you have and recognize its benefits. Seek improvement without diminishing your present value. Personal contentment comes from within and from mindful perspective.",
        "The proof of the pudding is in the eating, and results speak for themselves. Test and validate to ensure effectiveness. Outcomes often reveal the true quality of efforts. Evaluate success based on actual performance. Quality and value are determined by results, not just promises. Measure effectiveness through tangible achievements. Performance assessment is crucial for accurate evaluation.",
        "A rolling stone gathers no moss, but it can accumulate other things. Embrace change while managing potential challenges. Adaptability requires careful navigation of obstacles. Constant motion prevents stagnation but requires effort. Balance movement with stability to achieve growth. Evaluate the impact of change on progress. Ensure that flexibility contributes positively to outcomes.",
        "The devil is in the details, as small elements can have significant impacts. Pay attention to intricate aspects of tasks. Thoroughness and accuracy prevent errors. Success often hinges on careful consideration of details. Small issues can lead to larger problems if overlooked. Address details meticulously to ensure quality. Detailed attention is crucial for effective results.",
        "You can’t teach an old dog new tricks, but patience can yield results. Changing long-standing habits is challenging but possible. Approach change with empathy and persistence. Respect the pace of learning and adaptation. Encourage gradual progress and support. Personal growth requires understanding and encouragement. Facilitate change with care and consideration."
    ]
};


const quoteElement = document.getElementById('quote');
const inputField = document.getElementById('inputField');
const wpmElement = document.getElementById('wpm');
const accuracyElement = document.getElementById('accuracy');
const timerElement = document.getElementById('timer');
const startButton = document.getElementById('startButton');
const restartButton = document.getElementById('restartButton');
const leaderboardList = document.getElementById('leaderboardList');
const testTypeElement = document.getElementById('testType');
const testLengthElement = document.getElementById('testLength');
const difficultyElement = document.getElementById('difficulty');

let startTime;
let interval;
let timeLeft = 60;
let requiredWords = 0;
let leaderboard = [];
let testType = 'time';
let difficulty = 'easy';

function getRandomQuote(difficulty) {
    const quotesArray = quotes[difficulty];
    const randomIndex = Math.floor(Math.random() * quotesArray.length);
    return quotesArray[randomIndex];
}

function startTest() {
    const selectedDifficulty = difficultyElement.value;
    quoteElement.textContent = getRandomQuote(selectedDifficulty);
    inputField.disabled = false;
    inputField.focus();
    inputField.value = '';
    startTime = new Date().getTime();

    testType = testTypeElement.value;
    const testLength = parseInt(testLengthElement.value);
    
    if (testType === 'time') {
        timeLeft = testLength;
        timerElement.textContent = `Time Left: ${timeLeft}s`;
        interval = setInterval(updateTimer, 1000);
    } else {
        requiredWords = testLength; // Word count-based test
        timerElement.textContent = 'Time Left: --';
    }
}

function updateTimer() {
    timeLeft--;
    timerElement.textContent = `Time Left: ${timeLeft}s`;
    if (timeLeft <= 0) {
        clearInterval(interval);
        calculateResults();
    }
}

function calculateResults() {
    clearInterval(interval);

    const endTime = new Date().getTime();
    const timeTaken = (endTime - startTime) / 1000 / 60; // in minutes

    const inputText = inputField.value;
    const wordsTyped = inputText.trim().split(/\s+/).length;
    
    let correctTyped = 0;
    let errors = 0;

    const quoteText = quoteElement.textContent;

    for (let i = 0; i < inputText.length; i++) {
        if (inputText[i] === quoteText[i]) {
            correctTyped++;
        } else {
            errors++;
        }
    }

    const wpm = testType === 'time' ? Math.round(wordsTyped / timeTaken) : 0;
    const accuracy = Math.round((correctTyped / inputText.length) * 100);

    wpmElement.textContent = `WPM: ${wpm}`;
    accuracyElement.textContent = `Accuracy: ${accuracy}%`;

    inputField.disabled = true;

    updateLeaderboard(wpm);
}

function updateLeaderboard(wpm) {
    leaderboard.push(wpm);
    leaderboard.sort((a, b) => b - a);

    leaderboardList.innerHTML = '';
    leaderboard.forEach(score => {
        const li = document.createElement('li');
        li.textContent = `WPM: ${score}`;
        leaderboardList.appendChild(li);
    });
}

inputField.addEventListener('input', () => {
    if (!startTime) {
        startTest();
    }

    const quoteText = quoteElement.textContent;
    const inputText = inputField.value;

    let highlightedText = '';
    let errors = 0;

    for (let i = 0; i < inputText.length; i++) {
        if (inputText[i] === quoteText[i]) {
            highlightedText += inputText[i];
        } else {
            highlightedText += `<span id="errorHighlight">${inputText[i]}</span>`;
            errors++;
        }
    }

    quoteElement.innerHTML = quoteText.slice(0, inputText.length).replace(new RegExp(`(${inputText})`, 'g'), highlightedText) + quoteText.slice(inputText.length);

    const wordsTyped = inputText.trim().split(/\s+/).length;

    if (testType === 'word') {
        if (wordsTyped >= requiredWords) {
            calculateResults();
        }
    } else {
        const currentTime = new Date().getTime();
        const timeTaken = (currentTime - startTime) / 1000 / 60; // in minutes
        const wpm = Math.round(wordsTyped / timeTaken);
        const accuracy = Math.round(((inputText.length - errors) / inputText.length) * 100);

        wpmElement.textContent = `WPM: ${wpm}`;
        accuracyElement.textContent = `Accuracy: ${accuracy}%`;
    }
});

startButton.addEventListener('click', startTest);

restartButton.addEventListener('click', () => {
    clearInterval(interval);
    inputField.value = '';
    wpmElement.textContent = 'WPM: 0';
    accuracyElement.textContent = 'Accuracy: 0%';
    timerElement.textContent = 'Time Left: 60s';
    quoteElement.textContent = 'Click "Start Test" to begin!';
    startTime = null;
    inputField.disabled = false;
    inputField.focus();
});
