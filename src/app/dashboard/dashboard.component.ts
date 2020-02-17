import { Component, OnInit } from "@angular/core";
import { Quote } from "./Quote.model";

@Component({
  selector: "[app-dashboard]",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  quotes: Quote[] = [
    new Quote("“After an hour your power goes sour.”", " - Frosty Freeze"),
    new Quote(
      "“A lot of it is mental you have to not fear your opponent. That’s the number one thing, first off. Don’t underestimate anybody, but don’t fear anybody.”",
      "- Roxrite"
    ),
    // new Quote(
    //   "“A lot of people say, what’s foundation and they think 6 step or 2 step, you know what, those are just basic moves. Foundation is your basic, your feeling, your self expression. That’s your foundation. Foundation is a feeling. You have to feel it first, with the move that you’re doing. If you’re doing a basic move and you don’t feel it that’s not your foundation. If you’re dancing to the music that means you feel it. My inspirations are the ones that inspire me to feel the music.”",
    //   " - Bam Bam"
    // ),
    new Quote(
      "“A teacher is just a student who is farther along the path and can show the way. In every student is a master waiting to be born.”",
      " - Otis Funkmeyer"
    ),
    new Quote("“Always a student, never a master.”", " - Mr. Wiggles"),
    // new Quote(
    //   "“As far as being traditional, it’s not because people say there are set rules for the dance. That’s what we feel. We give respect to people who don’t really do traditional style moves. We give them props also. But that’s what we feel so that’s what we do.”",
    //   " - Abstrak, Skill Methods Crew"
    // ),
    new Quote("“B-Boying is for everybody.”", " - Ken Swift, Rock Steady Crew"),
    new Quote(
      "“Back then, everybody just bugged out. There was no certain style. You’re letting yourself out. You’re getting loose.”",
      " - Free, Circle of Fire and Shape Shifters"
    ),
    new Quote(
      "“Battles are like my kids, I don’t lose them.”",
      " - Alien Ness"
    ),
    new Quote(
      "“BBoying is a dance. You can represent however you want as long as your making a connection to the music.”",
      " - Free, Circle of Fire and Shape Shifters"
    ),
    new Quote(
      "“BBoying is an art. We’re artists and we’re putting ourselves up to be judged. That’s our choice so you have to be willing to accept the loss or the win or whichever way it goes.”",
      " - Paranoid Android"
    ),
    new Quote("“BBoying is my air.”", " - BBoy Patron"),
    // new Quote(
    //   "“BBoying takes the best from each dance form and makes it it’s own. Similarly to how Bruce Lee took the best from each fighting style and brought into together in his style Jeet Kune Do. You take the best from each to make a new style.”",
    //   " - BBoy Tailz"
    // ),
    // new Quote(
    //   "“Becoming a good dancer is not just the learning of complicated moves and routines, it’s a philosophy and a way of life. Taking your art and skills to the next level, which is PURE MASTERSHIP, complete confidence within yourself.”",
    //   " - Greg Campbellock Jr"
    // ),
    new Quote(
      "“Carpenters bend wood; fletchers bend arrows; wise men fashion themselves.”",
      " - Buddha"
    ),
    new Quote(
      "“Competition, of course, is the essence of every aspect of hip-hop culture, be it graffiti, emceeing, DJ-ing - what makes it real is the battle.”",
      " - Kid Freeze"
    ),
    new Quote(
      "“Dance has to come from within and not by imitating others and biting their style. It’s all about being true to yourself.”",
      " - B-Boy Serge"
    ),
    new Quote(
      "“Dance is a vocabulary. Can you recite the vocabulary forwards and backwards and add new words?”",
      " - BBoy Vietnam"
    ),
    new Quote("“Dance is infinite.”", " - Storm, Battle Squad"),
    new Quote(
      "“Dance is the universal language. You can meet someone in a club who’s Japanese, not say a damn word and dance all night.”",
      " - Mr Wiggles"
    ),
    new Quote(
      "“Dancing is the body talking. You can say anything you want.”",
      " - Salah"
    ),
    new Quote(
      "“Do you dance because of the music or because you want to win? It’s fun! That’s why you dance! Not because you need to beat this guy, but because it brings you joy. ”",
      " - Buddha Stretch"
    ),
    new Quote(
      "“Don’t be afraid to battle cats. The only way you’re going to get better is battling the people that are better than you.”",
      " - Poe One"
    ),
    // new Quote(
    //   "“Each individual cat got up and did his thing. It wasn’t like today where they come down and put down some nice linoleum so you don’t get burnt up. I mean, we used to b-boy right in the middle of the park with broken glass everywhere! And you’d get up and you’d be all scratched and burised and bleeding and you would be ready to go right back in the circle. You’d just wipe the glass off your elbows and go right back in.”",
    //   " - Jazzy Jay"
    // ),
    new Quote(
      "“Every breaker that is interested in not being a biter or a clone wants to create their own style.”",
      " - BBoy Fresh, LA Breakers"
    ),
    new Quote("“Foundation isn’t a move.”", " - Ken Swift"),
    new Quote(
      "“Have conviction when you dance, don’t just dance like it don’t mean nothing.”",
      " - Teknyc, Skill Methods Crew"
    ),
    new Quote(
      "“He who gains a victory over other men is strong; but he who gains a victory over himself is all powerful.”",
      " - Lao Tzu"
    ),
    new Quote(
      "“I am what you see when you see me dance. That’s me,”",
      " - Focus"
    ),
    new Quote(
      "“I battle for meat, if I don’t win, I don’t eat.”",
      " - Alien Ness"
    ),
    new Quote(
      "“I don’t believe B Boying is a natural talent. It’s the drive to improve that matters.”",
      " - Bboy Katsu"
    ),
    new Quote(
      "“I don’t honestly believe in rank, I think each person is equal. If you’re a beginning b-boy and another has been doing it 10 years, you’re still the same person. You’re still dancers. More knowledge doesn’t mean you’re better than anyone else.”",
      " - Thesis"
    ),
    new Quote(
      "“I learned from watching a little bit of everyone. I always try to stay open minded and I think that every dancer should. Don’t be afraid to experiment, you gotta make it your own.”",
      " - Bam Bam"
    ),
    new Quote(
      "“I taught them everything they know, but not everything I know.”",
      " - James Brown"
    ),
    // new Quote(
    //   "“I think new dancers need to understand that foundation is a feeling and you have to adapt it, and it takes time. A breakdancing move like a windmill or a headspin does not make you a BBoy. It takes time, you have to understand it, you need to grow into it. It can be for anyone. Any culture can learn it and be a BBoy.”",
    //   " - Bam Bam"
    // ),
    new Quote(
      "“I’m not gonna change my way of dance because I lost and the judge tells me I should do it a certain way.”",
      " - Roxrite"
    ),
    new Quote(
      "“If everybody does the same thing, there is no BBoying.”",
      " - BBoy Smurf, Zulu Kingz / Boogie Brats"
    ),
    new Quote(
      "“If haters hadn’t made me angry and made me practice, I wouldn’t have gotten this good.”",
      " - Bebe"
    ),
    new Quote(
      "“If people start questioning what you’re doing, that means you’re doing something right. Don’t quit.”",
      " - Poe One"
    ),
    new Quote(
      "“If you don’t toprock before you go down and do footwork, you’re not really BBoying.”",
      " - Popmaster Fabel, Rock Steady Crew"
    ),
    new Quote(
      "“If you have the form right and mess up and fall into something else, that’s a move. You just gotta add style to it.”",
      " - Thesis"
    ),
    new Quote(
      "“If you look at it, b-boying is other styles combined to one thing-into your own style. You adapt from everything you’ve seen and learned, and that’s how you express yourself. If you learn other dances, you can incorporate them and express yourself even more-that much stronger.”",
      " - Thesis"
    ),
    new Quote(
      "“If you really look at hip-hop dance, it’s really a rites-of-passage thing. You never see the arms release down. They’re always up in fighting position. It’s going to war. What do we say? We say your’re going to battle. You go out there and fight.”",
      " - Rennie Harris/Street Dance Legend"
    ),
    new Quote(
      "“If you think too much about being original, you’re gonna be stuck some day. The most stupid or easy movements can be dope; don’t dig too deep!”",
      " - Menno"
    ),
    new Quote(
      "“If you want to join the ranks of the people who changed the game, change yourself and the people around you as well.”",
      " - Bebe"
    ),
    new Quote(
      "“If you’re asking me what you need to do to be a good dancer than you already messed up. Nobody defines me. I define me. You have to ask yourself what you need to do to be a good dancer. That’s the only way to develop your own unique style.”",
      " - Buddha Stretch"
    ),
    new Quote(
      "“If you’re not messing up every now and then at practice, you’re not doing anything above your ability to progress.”",
      " - Crazy Legs"
    ),
    new Quote(
      "“If you’re really passionate about something, man, it always just kinda falls into place.”",
      " - BBoy Thesis"
    ),
    new Quote(
      "“In order to express yourself fluently with the art of dance, think of styles as vocabularies. The more moves you know the more fluently you can speak.”",
      "- Free, Circle of Fire and Shape Shifters"
    ),
    new Quote(
      "“Inspiration leads to motivation. Motivation leads to creation.”",
      " - BBoy Crumbs"
    ),
    new Quote(
      "“It is not necessary to try to beat or be better than your opponent, but rather to show what you can do. Instead of thinking ‘ok, I can beat this person,’ one should be thinking ‘ok, that’s what you can do, now let me show you what I can do.’ ”",
      " - Alien Ness"
    ),
    // new Quote(
    //   "“It was all strictly top-rocking, interesting drops to get down to the floor, incredible blitz-speed footwork. It was actually really unpredictable. Bouncing around, pivoting, turning, twists, front-sweeps, you know? And very aggressive, really aggressive to the point that I thought it was a gang dance at first.”",
    //   " - Popmaster Fabel"
    // ),
    new Quote(
      "“It’s not even about moves, it’s about style. You remember me by my energy, not my moves.”",
      " - BBoy Smurf, Zulu Kingz / Boogie Brats"
    ),
    new Quote(
      "“It’s okay to want to be as good as someone. But every person has a gift. You may not find your gift if you’re busy trying to be somebody else.”",
      " - BBoy Fresh, LA Breakers"
    ),
    new Quote(
      "“It’s what people have done since people began dancing in tribal cultures. You get into a circle with percussive music and let go and get carried. You don’t consciously force our movements, but allow them to flow through us. You aren’t just expressing, but something greater than yourself.”",
      " - BBoy Kujo"
    ),
    new Quote(
      "“It’s a way of life. It’s a feeling. It’s not just throwing down and making moves. You gotta feel it. We live it, we love it. It’s god given, it’s like spirituality. It’s not to satisfy the flesh, it’s to satisfy the spirit. Especially if you do it the right way. A lot of people aren’t really dancing for a meaning. They’re just throwing down and trying to be the best.”",
      " - Abstrak, Flipz, Teknyc, Skill Methods Crew"
    ),
    new Quote("“It’s not what you do, it’s how you do it.”", " - Thesis"),
    new Quote(
      "“Just do what you love to do and you can’t go wrong.”",
      " - Orb, Circle of Fire"
    ),
    new Quote(
      "“Just enjoy yourself. That’s the most important part. Because while you’re enjoying yourself, other people will notice. And eventually, you know, fame and fortune will follow.”",
      " - Toyz"
    ),
    new Quote(
      "“Michael Jackson didn’t wake up good. It took him time. James brown didn’t wake up good. It took him time. You have to put in work. You can’t be lazy, you have to have a passion.”",
      " - Buddha Stretch"
    ),
    new Quote(
      "“Music and dancing interlock. You can’t have one without the other.”",
      " - BGirl Loan"
    ),
    new Quote(
      "“Music is very important. It’s food for your brain.”",
      " - Ejoe Wilson/NY House Legend"
    ),
    new Quote(
      "“No one made me a good dancer. I made me a good dancer.”",
      " - Buddha Stretch"
    ),
    new Quote(
      "“Nobody is lucky. You create your luck. How? You practice.”",
      " - Salah"
    ),
    new Quote(
      "“Once I tried it, I never stopped. After my first battle, I knew I wanted to make it my own and become a real b-boy.”",
      " - BBoy Menno"
    ),
    new Quote(
      "“One good thing about music, when it hits you, you feel no pain.”",
      " - Bob Marley"
    ),
    new Quote(
      "“Originality is when you mix two things that haven’t been mixed.”",
      " - DJ Marlboro"
    ),
    new Quote("“Originality - that’s the key.”", " - Thesis"),
    new Quote(
      "“Our immediate influence in b-boying was James Brown, point blank.”",
      " - Crazy Legs/Rock Steady Crew"
    ),
    new Quote(
      "“Really dancing like this is just an expression from the beginning of time, so when they call it breaking it’s just a modern day term for an old way of term. Breaking is an old expression of an old dance. We’re keeping that legacy alive in the modern day.”",
      " - Bam Bam"
    ),
    new Quote(
      "“That’s what you strive for - you strive to take your move to the next level. It’s about shock value, always shock value, but keeping it flavor and stylized and making it yours.”",
      " - Crazy Legs/Rock Steady Crew"
    ),
    // new Quote(
    //   "“That’s what’s gonna make me come up with new stuff, if you get a good break or a good beat, you get a certain energy, and you wanna release that energy. Freezes to me are like releasing a certain energy. That’s me releasing energy that beat gives me, to come up with certain things. A good beat, a rare break, a dope song that I’ve never really breaked to before will give me a new feeling, a new movement.”",
    //   " - Roxrite"
    // ),
    new Quote(
      "“The best lessons come from our losses. With every loss we can gain a lesson through which we come one step closer to perfection.”",
      " - Alien Ness"
    ),
    new Quote(
      "“The body is the brush, the circle is the canvas, the paint is the blood, sweat and tears”",
      ". - Poe One"
    ),
    new Quote(
      "“The element of surprise is always the best way to beat your opponent effectively.”",
      " - Trac 2"
    ),
    new Quote(
      "“The fight is won or lost far away from witnesses - behind the lines, in the gym, and out there on the road, long before I dance under those lights.”",
      " - Muhammad Ali"
    ),
    new Quote(
      "“The floor is milk, churn it and make it butter.”",
      " - Crazy Legs"
    ),
    new Quote(
      "“The fumes of my sweat is the perfume of my struggle.”",
      " - Rez of The Procussions"
    ),
    new Quote(
      "“The illest battles I’ve seen haven’t always been the battles with the ‘big name’ B-Boys, it’s more about who had the heart and who puts all their body and soul into translating music to movement.”",
      " - B-Girl Smoothie"
    ),
    new Quote(
      "“The most important things for organizing a BBoy jam are One: good DJs, Two: a good floor, Three: good judges, Four: the rest doesn’t really matter.”",
      " - Amjad"
    ),
    new Quote(
      "“The one thing that can solve most of our problems is dancing.”",
      " - James Brown"
    ),
    new Quote(
      "“The only way you’re gonna get better is battling the people that are better than you.”",
      " - Poe One"
    ),
    // new Quote(
    //   "“The style of a b-boy, I never saw nothing like it. I’d never seen a dance approached like that original b-boy flavor, that straightforward, aggressive sort of I’ma-tear-up-this-floor feeling. A lot of times in my neighborhood I didn’t see smiles on their faces. They were on a mission to terrorize the dance floor and to make a reputation, ghetto celebrity style.”",
    //   " - Popmaster Fabel"
    // ),
    new Quote(
      "“The way you’re gonna battle is you gotta just be yourself.”",
      " - Thesis"
    ),
    new Quote(
      "“There is knowledge to gain from losing, just like winning.”",
      " - Zulu Gremlin"
    ),
    new Quote(
      "“There’s so much music, and it’s a limitless source for energy, for motivation, for inspiration, for creativity.”",
      " - Focus"
    ),
    new Quote(
      "“They got burned, now they gotta give up or get back in the lab. It either breaks them or makes them.”",
      " - Poe One"
    ),
    new Quote(
      "“We all bit something. That’s how we started. If we didn’t bite something, none of us would be doing six step or four step or five step.”",
      " - Poe One"
    ),
    new Quote(
      "“We don’t care about anything, we just move.”",
      " - BBoy Smurf, Zulu Kingz / Boogie Brats"
    ),
    new Quote(
      "“We had this culture as a kind of a refuge. Otherwise you would not have pride about anything.”",
      " - DOZE / Rock Steady Crew"
    ),
    new Quote(
      "“We used to get tore up breaking on asphalt. It was called battlescars. You had to go through it. You didn’t care. If you cared, it wouldn’t be no breaking!”",
      " - Bom5/Rock Steady Crew"
    ),
    new Quote(
      "“Well a breakdancer is gonna probably have no style and no originality but they probably gonna have some incredible real dynamic s--t that people can’t do because they practice so hard. A BBoy ain’t really gonna care about a dynamic move, they gonna care about a dynamic style.”",
      " - K-Mel"
    ),
    // new Quote(
    //   "“What counts most in my book is variety. Going out and doing so much that you just can’t really come back at that with one or two moves. He covered all his basic elements, his toprocks, hit footwork, his powermoves, his freezes. That’s what I look for most of all. Because those are the things that I try to exemplify when I’m dancing myself. I don’t always get that far because it’s quite difficult. But it’s the standard that I strive for and it’s the standard that I think other dancers should strive for because that’s what makes us mature as dancers. Why stick to one or two things when you can have it all?”",
    //   " - Kujo"
    // ),
    new Quote(
      "“When you’re in a perfect circle you’re hitting every beat. The music is pumping right through you. Time ceases to exist. Everybody there is letting their soul out to the music. It’s so bright it’s blinding. You can feel it for miles.”",
      " - BBoy Chicano"
    ),
    new Quote(
      "“Where’s your fingerprint? What move did you add to this game?”",
      " - Poe One"
    ),
    new Quote("“You are not doing hip hop; you ARE hip hop.”", " - KRS-One"),
    new Quote(
      "“You can’t help but be creative, we all are unique beings and have a unique story to tell from different walks of life.”",
      " - Bebe"
    ),
    new Quote(
      "“You dance for yourself. The relationship is between you and the music not with the audience.”",
      " - Teknyc"
    ),
    new Quote(
      "“You start to realize all the little details and moves you do. Every movement has a reason. Every movement has a world to it.”",
      " - Thesis"
    ),
    new Quote(
      "“You’re never going to change street dance as much as it’s going to change you.” - Barry “GRIZ”",
      " Rabk"
    )
  ];

  currentQuote: {};
  today: number;

  constructor() {}

  ngOnInit() {
    this.today = Date.now();
    this.currentQuote = this.quotes[
      Math.floor(Math.random() * this.quotes.length)
    ];
    console.log(this.currentQuote);
  }

  // console.log(this.currentQuote);
}
