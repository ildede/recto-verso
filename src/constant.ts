export type CardInfo = {
  identifier: string,
  front: {
    text: string,
    id: number
  },
  back: {
    text: string,
    id: number
  }
}

const CARDS = [{
  identifier: 'who',
  choices: [{
    text: 'Cook',
    id: 1
  }, {
    text: 'Student',
    id: 2
  }, {
    text: 'Star',
    id: 3
  }]
}, {
  identifier: 'where',
  choices: [{
    text: 'TV set',
    id: 1
  }, {
    text: 'School',
    id: 2
  }, {
    text: 'Circus',
    id: 3
  }]
}, {
  identifier: 'what',
  choices: [{
    text: 'Gun',
    id: 1
  }, {
    text: 'Fake items',
    id: 2
  }, {
    text: 'Treasure',
    id: 3
  }]
}];

export const FINALS = {
  '111': `
Jeremy is a famous Chef. He was invited to a TV show to record an episode featuring his special top rated recipe. Once on site, he realised it was a set-up. The special recipe was him, and he had been invited by a secret coven of cannibals who'd been cooking up fake TV shows for months to get fresh meat. Luckily Jeremy never left his gun at home, ever since he had to defend his ingredients against a rival chef in a TV challenge. Jeremy was a clever cook, and learning from his mistakes, as he always did for his master class recipes, proved to be life-saving.<br><br>
`,

  '112': `
Jeremy is an average cook trying to make a career in a highly competitive world. He is invited to a film set to record an episode of a popular cooking show. It was his big chance, but he never imagined that in TV shows the ingredients are fake and the recipe steps are already prepared to shorten the time. Realizing the deception, he understands he won't be able to unleash his creative talent and, completely furious, takes out his frustration by raging at the vegetables and randomly mixing in his pans everything he can find, including props and set materials. The episode obviously never aired, but the recordings began to circulate underground on the deep web and eventually went viral. GIFs and memes were created featuring Jeremy, an indie rock band used the footage for a video clip of their song, and there are rumours of an upcoming TV series, a docu-fiction, a three-chapters saga and a video game.<br><br>
Unfortunately, Jeremy never knew any of this. He was finally famous, but he was the only unaware one.<br><br>
<br><br>
You unlocked the true ending! Watch it here > <a href="https://youtu.be/mli-c4s60l4">https://youtu.be/mli-c4s60l4</a><br><br>
`,

  '113': `
Jeremy is a chef and has been invited to a TV set for the recording of a famous cooking show. The show is going swimmingly and his recipe is a success. After the show, the whole TV crew is invited to taste the delicious food Jeremy prepared. What the production crew didn't know was that Jeremy actually had much higher aims than just being a hit on a cooking show. In fact, Jeremy had been searching for an ancient treasure buried his entire life, ever since he found a coded map in his grandfather's attic trunk as a child. It was only when he was finally able to unlock the code to find the treasure that he realised that where there used to be a wasteland, there was now a huge building housing reality TV studios about cooking. It was then that he decided to put his plan into action, and rolling up his sleeves for years he attended the most prestigious cooking schools, with the intention of eventually gaining access to the studios. There was only one small problem: gaining undisturbed access to the basement.<br><br>
But Jeremy was not easily discouraged, which is why he planned ahead and came to the recording studio with a very special ingredient.<br><br>
No one present had suspected anything, just as no one had noticed that Jeremy hadn't even tasted his dish. Before long, Jeremy the cook would become Jeremy the millionaire, but none of them would ever live to find out. At most, they would have had time to notice the secret ingredient, but it would have been too late.<br><br>
`,

  '121': `
Jeremy is a tired old cook. All his life he has been working in a school cafeteria, day after day, week after week, for years, then decades. Never a day off, never an uplift, never an appreciation. After all, what do children know about gourmet recipes and fancy food? Jeremy is tired, and when finally his sons leave to study abroad and his wife leaves him for the 18/10-stainless-steel-cooking set's salesman Jeremy introduced her to that time he tried to bring a twist into his canteen, he decides there's no point in continuing his agony, and he excogitates a blatant act to make all the school staff and all the ungrateful students feel guilty. He is determined, and that day he brings a gun with him to school, willing to kill himself in front of everyone, in the courtyard, during recess time. When he reaches the center of the playground, the worried students start calling their teachers, as well as their parents and grandparents at home. The parents rush to the school to avoid the tragedy, but when they got there they were speechless. They all knew Jeremy. But that was many years before. Wasn't that man their cook from their days back in school? But wasn't he already old and tired then? And... wait... Hadn't he been all over the front pages because he had made an extreme gesture in front of all the kids at recess?<br><br>
It took Jeremy a while to recognize those now-parents - and grandparents! - former students. Why were they all grown-ups? Why some were even elders? He soon realized that this personal hell, made of alike days, exhausting shifts, hellish temperatures in the kitchen and cheap ingredients was his punishment for the life he took a long time before.<br><br>
Poor Jeremy. You wanted to get rid of this all, but you did already, and now you're in a hell of a kitchen for the rest of your eternity.<br><br>
`,

  '122': `
We don't know! 😱
`,

  '123': `
Jeremy is an aspiring cook. He is participating in a contest at his local cooking academy, and he has to share his favorite recipe with the rest of the class and the teachers. It's a callenge, and a rich treasure is up for grabs. He's sure to have victory in his pocket, with his Galette saucisse flambé drizzled with 8.6 beer. The master chef, Jean Michel, is impressed by Jeremy's cooking skills, and when the challenge is over greets Jeremy and promises him to keep him posted on the outcome of the contest.<br><br>
Months pass, but the master chef never gets back to Jeremy. That's why Jeremy is genuinely surprised when he sees his teacher Jean Michel attending a TV show cooking contest. But hey, what is that dish he's sharing with the audience? Oh, it's just his secret masterpiece. Oh noes! That's Jeremy's "galette saucisse flambé drizzled with 8.6 beer"!<br><br> 
Good job, Jeremy. Your recipe was indeed a blast and won the first prize. Unfortunately, Jeremy, your treasure is in another kitchen..."<br><br>
`,

  '131': `
We don't know! 😱
`,

  '132': `
We don't know! 😱
`,

  '133': `
We don't know! 😱
`,

  '211': `
Jeremy is an Italian-American chef and has been invited to an elementary school to hold cooking class and teach kids about food from the rest of the world. Jeremy is very proud of his Italian roots, and has learned his trade in the oldest trattorias in central Italy. That's why on that day he wanted to surprise the class and share his most famous recipe: pasta alla carbonara. A worldwide known recipe which is also simple, hearty and quick to prepare. Jeremy, however, had underestimated a problem of the greatest importance. The ingredients. What an amateur's mistake! When he got in the classroom, the guanciale cured meat and the pecorino cheese he had asked for had been replaced by bland bacon cubes and very ordinary parmesan. But, even worse, the ultimate outrage: cream. Jeremy lost his mind, and pulling out the gun he had been carrying since someone tried to kill him after he published his controversial book "Pepperoni is not salami", he took hostage the whole class. When he managed to get on the phone with the police negotiator, his demands were perfectly clear and fair: he would let everyone go only after airing a cooking class on multiple TV channels featuring <i>"La Carbonara"</i>.<br><br>
Jeremy succeeded in his intent, the special broadcast broke all audience records and finally justice came: no one in the whole world ever dared again to put obscene ingredients such as mushrooms, shredded carrots, fried eggs nor - especially - cream in carbonara pasta.<br><br>
`,

  '212': `
We don't know! 😱
`,

  '213': `
We don't know! 😱
`,

  '221': `
We don't know! 😱
`,

  '222': `
We don't know! 😱
`,

  '223': `
Jeremy is an elementary school student who, like many children, loves to dig in the schoolyard with a shovel and bucket. Imagine his happiness when one day he finally unearths a real treasure!<br><br>
What a joy! Who knows what it will contain! - thought Jeremy. He had already started thinking about all the candies he could buy with all those doubloons, or how much he could impress the second-grader he liked so much.<br><br>
I'm going to run home right now and tell mom—<br><br>
<strong>CHOMP!</strong><br><br>
Right on time, like every 27 years, the mimic woke up, hungry for human sacrifice. Once again, hiding in a schoolyard had proven to be a winning move. With his belly full and satisfied, the mimic walked off into the sunset and headed for the nearest school, looking forward to the long 27-year nap he deserved, and a tasty, tender breakfast.<br><br>
`,

  '231': `
We don't know! 😱
`,

  '232': `
We don't know! 😱
`,

  '233': `
Timmy is a first-year student. He has left his beloved country to go to his dream university. But that's not just everything he has left behind. He has lost all his friends and even his girlfriend, because they were all against his decision to go and study in a whole different country. Timmy is depressed and he did not manage to befriend anyone. How could he when all he does is lying in bed and crying? Poor guy...<br><br>
One sunny day, Timmy decides to go out for a walk to explore the city. The fresh air immediately hits his brain and boosts his serotonin levels. Timmy is feeling alive and curious, and he can't stop walking. After 25,000 steps, he reaches the other part of the city. A whole new world for him. The first thing he sees there is a circus. He has never seen anything similar in his entire life. Maybe only on TV. Timmy is mesmerized and tries to figure out a way to lurk. He manages to catch a glimpse and he is lured closer and closer...and closer...until he finds himself between the artists. They all seem warm and happy, with huge smiles on their faces. At first, Timmy was thinking to tell them that he was sorry and that he was lost. After spending 5 minutes of genuine laughter, he realizes he has just discovered a treasure. What if this was the sign he has been waiting for? He feels like spending his whole life with these guys...but how could he when he is the worst when it comes to sports?!<br><br>
Are you wondering how is Timmy and where you can find him? Let us tell you that he is one of the bravest and most famous tightrope walkers in the world! Dream big and work hard!<br><br>
`,

  '311': `
Jennifer is a famous musician. Everybody knows at least two songs of hers. For 3 years in a row, she won the prize for the best singer. All of a sudden, she disappeared from the music scene. No one knew what happened. After 2 years, we all hear on the radio that Jennifer is going to make her grandiose and long-awaited comeback. It's Friday evening and we are all sitting in front of our TVs, holding our popcorn bowls tightly. Don't we all hate sharing our popcorn? "TYFG" (Thank you, Friday, for the Gossip!) will air in 5 minutes.<br><br>
Oh no! What's going on?! All of a sudden, the transmission is interrupted. We can all see an unanticipated message on the screen: "Jennifer is on our TV set with a gun, saying that she will kill herself. The TV show cannot be aired because we did not have enough money to pay our electricity bill. Please donate as much as you can so we can pay our bill as we speak, and to be able to show you live images from the TV set."<br><br>
15 minutes later, the donations reach 1 million U.S. dollars, and the TV show is aired. Jennifer and Janice, the hostess, give each other a fist bump. Once again...what's going on?!<br><br>
Jennifer bursts into tears and tells us her story. She disappeared from the music scene because she couldn't take it anymore. The fake news about her, the paparazzi all over the place, the sleepless nights, the lonesomeness...these were the factors that triggered her depression. The whole "electricity bill" story was invented, because she knew that people would donate more for such a story instead of donating to help the others.<br><br>
All the money raised were distributed to raise awareness and to support advanced research on mental disorders. Now this was a remarkable comeback!<br><br>
`,

  '312': `
We don't know! 😱
`,

  '313': `
We don't know! 😱
`,

  '321': `
We don't know! 😱
`,

  '322': `
We don't know! 😱
`,

  '323': `
We don't know! 😱
`,

  '331': `
We don't know! 😱
`,

  '332': `
Jennifer is a circus artist. Everybody is openmouthed when they see her hooping. Her performance starts in 5 minutes and she sure is ready. Her hoops are there, she is feeling good, the spectators are already shouting her name. What on earth could go wrong?<br><br>
However, little do we know about Jennifer's behavior towards her new colleague during the whole week. She was very mean and arrogant to poor Timmy who did nothing wrong.<br><br>
Guess what? Timmy saw in those 5 minutes before the show an opportunity to ruin Jennifer's performance. He replaced one of her plastic hoops with a fake hoop of the same color, but made of a very heavy metal. When Jennifer took her hoops and walked towards the stage, she totally felt like something was different, but there was no time for her to ask questions. She was supposed to perform for 15 minutes, with a huge smile on her face. She is not a quitter, so she did perform, but we could all see her smile slowly fading away. She started to sweat and turned yellow. She could feel the bruises starting to appear on her hips.<br><br>
Right after the show, Jennifer ran to her room and cried all night long. She realized what happened and, first thing in the morning, she knocked on Timmy's door and apologized for her attitude.<br><br>
Are they getting along now or have they just turned into even worse enemies? Thanks to Timmy's forgiving nature, this actually resulted in the beginning of a beautiful friendship.<br><br>
`,

  '333': `
We don't know! 😱
`,


}

export const getCards: () => CardInfo[] = () => {
  return CARDS.map(e => {
    const selected = e.choices.sort(function () {
      return .5 - Math.random()
    }).slice(0, 2);
    return {
      identifier: e.identifier,
      front: selected[0],
      back: selected[1]
    }
  });
}
