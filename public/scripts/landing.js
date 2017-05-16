var scrollheight=120; // variable to make sure scroll back to where text is on button 
//  function  newTextOnClick(selectorClicked,selectorChanged,scrollHeight,htmlString) 
// {
//     $(selectorClicked).click( function() {$(selectorChanged).html(htmlString)});
//   $('html, body').animate({ scrollTop: scrollHeight }, 0);
// }

// newTextOnClick("#welcome","#content", scroll, 'Hello World!');
// Front/welcome Page
$("#welcome").click(function() { $("#content").html("<h2 class='title'> Churches@GU16 is the group of churches that serve the GU16 postcode area. </h2><p>On this web-site you will find information about the churches and their activities. </p><p>The links on the left will take you to summary information about these local churches and from there you can get to their web pages.</p><p>Churches@GU16 organise some joint activities which you can find using the 'Events' link.</p>")
             $('html, body').animate({ scrollTop: scrollheight }, 0);});

// events
$("#events").click(
 function() { $("#content").html("<h2 class='title'>Up-coming Events</h2><h3>Things that are happening soon...</h3><p>The churches of GU16 organise some activities together. This page has information about up-coming events that may be of interest.<p><h3>Holiday Club 2017</h3><h3>Rocky's Plaice</h3><p>10:00 a.m. - 12:45 p.m.</p><p>Tuesday 29th August to Saturday 2nd September 2017</p><p>For children who have just been in school years R-7. (5-12 years old)</p><p>A great week of fun and games, stories, quizzes, crafts, songs, drama and challenges.</p><p>£20 per child for the week.</p><p>If you are interested fill in a registration form. Space is limited so do not leave it too late!</p><p><a href='mailto:gu16.bible.club@gmail.com'>Request an application form.<a></p>")
$('html, body').animate({ scrollTop: scrollheight }, 0);            
            });

// encounter church
$("#encounter").click(
 function() { $("#content").html("<h2 class='title'>Encounter Church</h2><p>Encounter Church is a new Christian community serving Frimley and the surrounding areas.  Our culture is characterised by worship, the presence of God, family, revival, miracles and healings, and honour. We welcome families, singles, young adults, mums and dads, aunties and uncles, grandmothers and granddads.</p><p>Our heart is to bring people into an encounter with Jesus, to serve our community, and to help bring revival to the UK.</p><p>We are part of Global Legacy, a worldwide apostolic, relational network of revival churches and leaders whose purpose is to bring heaven to earth. </p><p>We meet Sundays 10:00 - 12:00 in</p><p>Deepcut Village Centre<br/>89 Swordsmans Road,<br/>Deepcut, Camberley<br/>(Entrance on Crimea Road) <br/>GU16 6GF <br/>Tel. 01276 409297</p><p>Occasionally we do meet at alternative venues, so please visit our Facebook page for up to date information.</p><p>It depends on what we have planned, sometimes we meet just to worship and other times we meet for fellowship and a sermon. </p><p>We also meet on Tuesday evenings from 8pm in Frimley. The evenings are filled with coffee, worship, prayer and fellowship so please call us or email us for our address and meeting times.</p><p>Please visit our website encounter.org.uk for more information or our Facebook page for updates.</p><p>Gary Ashe, Encounter Church.</p><p>07833 790328</p>")
$('html, body').animate({ scrollTop: scrollheight }, 0);         
            });

//frimley baptist church
$("#fbc").click(
 function() { $("#content").html("<h2 class='title'>Frimley Baptist Church</h2><p>Frimley Baptist Church, located in Balmoral Drive in Frimley, is a Christian community of about 250 adults plus children and young people.</p><p>Although 'Baptist' is in our title, we see ourselves primarily as a church for our local community and for people of all Christian backgrounds and of none.</p><p>Find out more about what goes on at Frimley Baptist church at <a href='#'>http://www.fbc.org.uk/</a></p>")
$('html, body').animate({ scrollTop: scrollheight }, 0);
            });

//frimley green methodist church
$("#fgm").click(
 function() { $("#content").html("<h2 class='title'>Frimley Green Methodist</h2><p>Frimley Green Methodist is a small, friendly church which has been a Christian presence on the Green since 1940. We meet for worship on a Sunday at 10.30am and 6.30pm and have various activities happening during the week. As a church we are working together to discover more about God, the life that he offers us and to share his love with those around us.</p><p>We share in communion once a month and anyone who wishes to is welcome to receive the bread and wine. Four times a year all ages worship together in a service in which the children are usually very involved.</p><p>We hope that you find a warm welcome with us. If you are new to us, please do introduce yourselves or if you would like any more information, please ask. The stewards and I are always pleased to talk to you and we look forward to getting to know you.</p><p>Blessings, Rev Gina Hoff</p><p>Find out more about Frimley Green Methodist church at <a href='http://www.frimleygreenmethodist.org.uk/'>www.frimleygreenmethodist.org.uk</a></p>")

$('html, body').animate({ scrollTop: scrollheight }, 0);
            });

//mytchett baptist church
$("#mbc").click(
 function() { $("#content").html("<h2 class='title'>Mytchett Baptist Church</h2><p>Mytchett Baptist Church is on Mytchett Road.</p><p>Services are held at 10:00 am every Sunday</p><p>Minister: Rev. Chris Russell.</p><p>Perez Chapel use the building on Sunday afternoon from 1pm, led by Rev. Edward Ibo Imbea")
             
$('html, body').animate({ scrollTop: scrollheight }, 0);                       });

//mytchett community church
$("#mcc").click(
 function() { $("#content").html("<h2 class='title'>Mytchett Community Church</h2><p>After 15 adventurous years, Mytchett Community Church has decided that it is time to cease our regular meetings and disperse into the wider community. A worshipping presence in the village will continue at both Mytchett Baptist Church and St Andrews Church.</p><p>Visit our website to find out more about us: <a href='http://www.mytchettcommunitychurch.org.uk/'>www.mytchettcommunitychurch.org.uk</a>")
            
 $('html, body').animate({ scrollTop: scrollheight }, 0);    });

//our lady queen of heaven
$("#olqoh").click(
 function() { $("#content").html("<h2 class='title'>Our Lady Queen of Heaven</h2><p>This Church, dedicated to Our Lady Queen of Heaven, is the centre of Catholic worship and community life in Frimley and its environs.</p><p>For more information visit <a href='http://www.olqh.com/'>www.OLQH.com</a></p>")
$('html, body').animate({ scrollTop: scrollheight }, 0);          });

//st andrews church
$("#sta").click(
 function() { $("#content").html("<h2 class='title'>St. Andrews</h2><p>Whether you are exploring the claims of Jesus or you long to know and serve him better, St Andrew’s is here to help. We are a growing church at the heart of the community situated by Frimley Lodge Park.</p><p>We are very much a local Anglican church, enjoying close links with Frimley Church of England Junior School, Mytchett Primary School and Cross Farm Infant School.</p><p>We believe the purpose of St Andrew’s is: ‘To be a local Anglican church in Frimley Green and Mytchett that seeks to make disciples of Jesus Christ in the power of the Spirit to the glory of God the Father’</p><p>We believe that a personal relationship with God through Christ is at the heart of who we are and that we are dependent on his Spirit and prayer. We believe that the Bible is God’s living and active word and should be central to all we do as a church.</p><p>On the basis of its teaching our values are:</p><ol><li>We are committed to seeing people coming to Christ and growing as disciples within a changing congregation and a changing society</li><li>We are committed to each other as a community of fellow workers as we seek to release the potential of the whole church for Christ through teaching, supporting and encouraging one another</li><li>We are committed to serving the society around us and speaking Christ into it and so maintaining and developing our relationships</li><li>We are committed to Christ above our culture and that our engagement must be shaped by biblical thinking and must resist what is incompatible with Christ in our culture</li></ol><p>For more information visit <a href='http://www.st-andrewschurch.org.uk/welcome.htm'>www.st-andrewschurch.org.uk</a></p>")

$('html, body').animate({ scrollTop: scrollheight }, 0);
            });

//st francis' church
$("#stf").click(
 function() { $("#content").html("<h2 class='title'>St. Francis</h2><p>St Francis’, which celebrated half a century of life, worship and service in 2014, was originally built to serve the then new Warren Estate and Upper Chobham Road area. It is an attractive wooden clad building set in pleasant woodland surroundings. The church is simple and beautiful with an intimate and friendly atmosphere, and a congregation which is particularly welcoming. </p><p>The church is open each week day morning during term time, providing a quiet space to just sit or pray for a few moments during a busy day.</p><p>For more information visit <a href='http://www.frimleyparish.org.uk/stfrancis.htm'>www.frimleyparish.org.uk</a>")

$('html, body').animate({ scrollTop: scrollheight }, 0);
            });

//st peters church
$("#stp").click(
 function() { $("#content").html("<h2 class='title'>St. Peters</h2><p>At St. Peters Church on the Frimley Green Road at its junction with Grove Cross Road, we are a Community, and extend a welcome to anyone wishing to join in worship, and take part in expression of faith.</p><p>The main worship service on a Sunday morning is at 10.00 am, always inclusive of music, and we hold All Age Worship on the first Sunday and All Age Communion on the third Sunday. We encourage participation in a lively way at these services. </p><p>We also have Messy Church at 4pm on the 4th Sunday of the month. </p><p>The Parish Hall, adjacent to the church, provides a venue for many local community and private activities, assisting the church in its desire to serve the locality and build relationships with local residents.</p><p>For more information visit <a href='http://www.frimleyparish.org.uk/Welcome.htm'>www.frimleyparish.org.uk</a></p>")

$('html, body').animate({ scrollTop: scrollheight }, 0);
            });

//hospital chaplains
$("#hc").click(
 function() { $("#content").html("<h2 class='title'>Hospital Chaplains: Frimley Park Hospital</h2><p>Frimley Park Hospital is a major regional hospital located in our community. The Chapel is on the ground floor facing the A and E corridor. It is open 24 hours of every day as a place of prayer and quiet for everyone. </p><p>Sunday Services </p><p>9.00am Holy Communion</p><p>The services are conducted by one of the Hospital the Chaplains. They are quite informal and last no more than 20 minutes. Those wanting ministry from within their own denomination or tradition should make contact with the Chaplaincy Department who may liaise on their behalf (direct line 01276 604184). For more information visit the hospital <a href='https://www.fhft.nhs.uk/your-visit/'>website</a></p>")
            
$('html, body').animate({ scrollTop: scrollheight }, 0);
            });

//children's clubs
//Introductory parygraph
$("#cc").click(
 function() { $("#content").html("<h2 class='title'>Children and Youth</h2><h3>What’s on for children in GU16?</h3><p>The churches in GU16 work together to run a holiday club in the second to last week of the summer holidays– open to all children of primary school age.</p><p>We also run other special events for children and families throughout the year:</p><ul><li>Light Party</li><li>Christmas Crafts (all ages)</li><li>Breakfast out-of-bed (Mothers Day)</li><li>Easter Egg Hunt (all ages)</li><li>Family fun-days</li></ul><p>If you are interested in joining in with any of these events let us know and we will send you information about events as they occur.</p><p>All the churches also run regular activities – we list here those of interest for children and youth. Contact details are provided in case you want to find out more.</p><p>All GU16 churches have policies with regard to DBS checks and have child protection officers.</p>")
//Frimley Baptist Church children's activities.
             $("#content").append("<h3>Frimley Baptist Church</h3><p>Website: <a href='http://www.fbc.org.uk/'>www.fbc.org.uk</a></p><p>Email: office@fbc.org.uk</p><p>Telephone: 01252 837844</p><h4>SUNDAY</h4>	<p>10:30am - 11:45am</p><ul><li>Glo-worms ages 0-2</li><li>Sparklers ages 3-5</li><li>Childrens Church yrs 1-6</li><li>YoYo yrs 7-8</li></ul><p>7:45pm - 9:15pm</p><p>Zoo yrs 10-13 after the evening service</p><h4>TUESDAY</h4><p>9:30am - 11:30am</p><p>Playbox ages 0-4 at the church</p><p>7pm - 8:30pm</p><p>Cafe Crunch (youth club) ages 11-14 at the church</p><h4>THURSDAY</h4><p>9:30am - 11:30am</p><p>Playbox ages 0-4 at the church</p><h4>FRIDAY</h4><p>10am - 11:30am</p><p>BATS age 0-4 at the church</p><p>6:30pm - 8:30pm</p><p>Boys Cell school yrs 10-13 at the church</p><p>6pm - 8pm</p><p>Girls Cell school yrs 10-13 at the church</p>")
             
 //Frimley Green Methodist Children's Activities.
             $("#content").append("<h3>Frimley Green Methodist Church</h3><p>Website: www.frimleygreenmethodist.org.uk</p><p>Contact: Rev Gina Hoff</p><h4>>SUNDAY</h4><p>10.15-11.30am Creche   For the under 4s or parents can stay in church with their children in a family area.</p><p>10.15-11.30am Sunday Club [Term time]</p><p>A club for 4-11 year olds. A fun time with stories, games and craft </p><p>(Sue Hodgson 01276 5003670)</p><h4>FRIDAY</h4><p>10.00am-12.00 Parent and toddler.</p><p>This is open to parents and childminders and the children in their care. </p><p'>(Claire Porter 01252 835986)</p>")

//our lady queen of heaven childrens activities. note appending to end of previous paragraph.
$("#content").append("<h3>Our Lady Queen of Heaven</h3><p>Website:  www.olqh.com </p><p>Parish Office:    01276 504876</p><p>Father John O’Sullivan</p><h4>Sunday</h4><p>10.30am Mass</p><p>Children’s Liturgy for 5-8year olds.</p><p> The Gospel and Liturgy of the Word is related to children in age appropriate language through stories and games.  All activity leaders and helpers are CRB checked and cleared.</p><p>Creche. </p><p>0-3 year olds welcome.  Parents are invited to bring their children to the crèche and can stay or leave. All activity leaders and helpers are CRB checked and cleared. This age group learns hymns and prayers through simple games and fun.</p><h4>Friday</h4><p>The Parish Youth Club, this is open to all children in years 5-7 at school.  They meet from 7pm – 8.30pm for a fun packed evening.  If you would like to find out more about this group please email the parish office at olqh@ntlworld.com</p>")

//st andrew's church childrens activities
$("#content").append("<h3>St. Andrew's Church</h3><p>Web: www.st-andrewschurch.org.uk/childrenandyouth.htm</p><p>Contact: Candy Price, Children & Youth Worker</p><p>Tel: 01252 67 40 72 or 07804 69 73 16</p><p>Email: candylynn@rogers.com</p><h4>SUNDAY</h4><p>Informal service 11:00 am</p><ul><li>'Scramblers', Creche 0-3yrs</li><li>'Climbers', bible stories, games and crafts for 4-7yrs</li><li>'Explorers', bible stories and games for 8-11 yrs</li></ul><h4>THURSDAY</h4><li class='parafive'>'Baby and Toddler Group' 10:00 am - 11:30 am. Rhyme time, crafts, music and movement and more. Tea and biscuits for adults. £1.50 per family, plus 50p per additional child. Contact Kayleigh on 01252 447236</li><li>'WiReD' (term-time) 6:30 - 8:00 pm. Free Youth group for 10-14. Fun and games - table-tennis table-football, Wii, group games, music, jan sessions, activity evenings, outings, BBQ... with a bible study or Q&A session most weeks.</li>")
             
 //St peters church Children's activities
$("#content").append("<h3>St. Peter's Church, Frimley</h3><p>Website:  <a href='www.frimleyparish.org.uk/Welcome.htm'>www.frimleyparish.org.uk</a></p><p>Parish Office:  01276 27855</p><h4>1st SUNDAY  of month  </h4><p>10.00am All age Worship</p><h4>3rd SUNDAY</h4><p>10.00 am All age communion</p><h4>2nd, 4th and 5th SUNDAY</h4><p>10.00 am Holy communion</p><p>Splash 4-10yrs </p><p>Children will be invited to leave for fun church activities with their CRB checked leaders, parents are welcome to go with the children if they wish.</p><h4>4th Sunday</h4><p>Messy Church at 4:00pm or with the uniformed organisations at 2:00pm</p><ul><li>Messy Church is a way of being church for families involving fun</li><li>is a church, not a craft club, that helps people encounter Jesus as Lord and Saviour</li><li>is found across the world</li><li>values are about being Christ-centred, for all ages, based on creativity, hospitality and celebration</li></ul>")
            
$('html, body').animate({ scrollTop: scrollheight }, 0);             
            });

//senior citizens activities ... intro
$("#sc").click(
 function() { $("#content").html("<h2 class='title'>Senior Citizens Activities</h2><h3>Activities for Senior Citizens in GU16</h3><p>Many churches in GU16 run all kinds of events for senior citizens.</p><p>If you are interested in joining in with any of these events, contact the specific church direct to find out more details.")
//olqoh senior activities
$("#content").append("<h3>Our Lady Queen of Heaven</h3><p>Silver Circle – this group of Parishioners meet each Monday to prepare lunch, which is served at 12.30pm for about 30 senior citizens of all denominations.  A range of activities and entertainment may be provided after lunch until 3pm.  New members are always welcome to either join this group or come for lunch.</p><p>Please contact Mrs Jean Watkins for  more information on 01276 685057 or email the parish office at olqh@ntlworld.com</p>")

//St Andrew's Church Senior Activities
$("#content").append("<h3>St. Andrews Church</h3><p>SUNDAY 9.30 am Communion.</p><p>Parishioner’s Tea.  2nd Sunday each month. 3.30-5.00pm</p><p>An enjoyable event with sandwiches and cakes. For all parishioners over 55. Contact Joyce Colley TEL-01252 837291</p><p>10-12am Every Friday Pop In for tea and biscuits in the church hall.</p>")

//St Peter's Church Senior Activities
$("#content").append("<h3>St. Peters Church</h3><p>Over 60s Club 2nd and 4th Thursdays of the month in St Peters Hall at 2pm. Contact: Val Walther, 01276 63300. </p><p>We have a team of Pastoral Assistants, several of whom visit senior citizens who are housebound or lonely, also taking Communion when requested. Contact for this: the Parish Office.<p>10-12am Every Tuesday, Friday and Saturday: Pop In for tea and biscuits in the church.</p>")

$("#content").append("<h3>Frimley Baptist Church</h3><p>Midweek Fellowship. 2.00-4.00 pm Wednesdays. This is a special time for senior citizens to meet together for friendship and worship.</p> <p>Communion Service Sunday 9.00am. A quiet service that finishes before early morning.</p>")

$("#content").append("<h3>Frimley Green Methodist Church</h3><p>Craft Club. 3pm on Fridays.</p><p>Although most of our activities are not aimed specifically at retired folk, you are, of course, always welcome at our Sunday services.  If you would like to come, but transport is a problem, then please contact the Minister, and we will try to help.  Every term there is a concert given by our children’s Sunday Club, open to everyone in the community, and older people are particularly welcome at that event.  Watch the Notice Boards for further details.</p><p>Rev Gina Hoff</p>")

$('html, body').animate({ scrollTop: scrollheight }, 0);         });

//organisations and advice
$("#oanda").click(
 function() { $("#content").html("<h2 class='title'>Organisations and Advice</h2><h3>Advice Centres</h3><p><strong>Citizens Advice Bureau</strong><br/> Citizens Advice Bureau <br/>Rear of Library <br/>Knoll Road<br/>Camberley<br/>Surrey GU15 3SY</p><p>01276 684 342</p><h4>Opening hours</h4><p>Monday to Thursday 10am to 4pm</p><p>Free, confidential and impartial advice  on all subjects including: </p><p>Benefits, Community Care, Consumer, Debt, Education, Employment, Finance, Health, Housing, Immigration, Legal,Personal / Family / Relationships, Taxation, Utilities, Welfare.</p><p>Advice is available during opening hours by phone or in person by calling at the bureau.</p<p>The service is available to all in Surrey Heath Borough  (an area that includes Bagshot, Bisley, Camberley, Chobham, Deepcut, Frimley, Frimley Green, Lightwater, Mytchett, West End and Windlesham) and surrounding districts.</p><p><a href='http://www.citizensadvicesurreyheath.org.uk/'>http://www.citizensadvicesurreyheath.org.uk/</a></p>")

 //Citizens advice Ash
$("#content").append("<h3>Citizens Advice Bureau Ash</h3> <p>Ash Hill Road, Ash,<br/>Surrey,<br/>GU12 5DP<br/></p><p> ashcab@cabnet.org.uk</p><ul><li>Community Legal Advice</li><li>Incapacity Benefit</li><li>Employment Support</li><li>  Allowance Migration</li></ul><p>We offer free, confidential and impartial advice to all, regardless of age, disability, gender, race or sexuality.</p><p>Opening hours  Monday - Thursday 9:30am - 1:00pm</p><p>Monday - Thursday 1:30pm - 2:45pm</p><p>Fridays 10:00am - 1:00pm</p><p><a href='http://www.ashcab.org.uk'>http://www.ashcab.org.uk/</a></p>")
            
$('html, body').animate({ scrollTop: scrollheight }, 0);
            });