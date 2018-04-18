<?php
/**
 * The front page template file
 *
 * If the user has selected a static page for their homepage, this is what will
 * appear.
 * Learn more: https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Twenty_Seventeen
 * @since 1.0
 * @version 1.0
 */

get_header(); ?>
<main role="main">
<section id="welcome" class="parallax fullscreen">
	<div class="intro fade">
		<h1>CHÂTEAU DE SOURS Vineyard</h1>
		<p><em>WELCOME</em> to <em>CHÂTEAU DE SOURS</em></p>
		<span class="scroll-tip">Scroll</span>
	</div>
	<article>
		<div>
			<h2>EST.&nbsp;2009</h2>
			<p><em>Château de Sours</em> has been producing extraordinarily <em>good wine</em> for over <em>200</em> years.</p>
			<!-- <p>At <em>Lightfoot &amp; Wolfville</em> Vineyards we grow <em>handcrafted</em>, small-lot wines in <em>certified organic</em> vineyards.</p> -->
			<p>Situated high up on a commanding <em>limestone plateau</em> just to the south-west of 
				<em>Libourne</em> and <em>Pomerol</em> and facing <em>Saint-Emilion</em>, <em>Château de Sours</em> has been producing extraordinarily <em>good wine</em> for over <em>200 years</em>.</p>
			<p><em>Today</em>, our <em>winemakers</em> continue to blend the <em>traditional rigour</em> and <em>craftsmanship</em> of the region with a modern 
  creative approach that produces some of Bordeaux's most respected <em>red</em> and <em>white wines</em>, as well as a top class, world-famous rosé.</p>
		</div>
	</article>
</section>

<section class="blockquote">
	<figure class="quote">
		<blockquote id="quote-reader">
			<h1>A message from <em>Dannie Bergmann</em></h1>

			<p>Our team of winemakers at Château de Sours combine traditional 'old world' rigour and craftsmanship with a blend of innovative techniques and 'new world' charm.</p>
			<p>In this respect, they very much share our vision and their global experience accurately reflects Bordeaux's new wave of dynamic Oenologists.</p>
			<p>They have considerable vineyard management and winemaking skills, having worked in more than a dozen different countries around the world.</p>

			<p>
				Dannie Bergmann - CEO of Château de Sours
				<span class="signature">
					<img src="<?php echo get_theme_file_uri('assets/images/peter-gamble-signature.svg');?>" alt="Dannie Bergmann Signature">
				</span>
				<a class="listen-trigger" href="#quote-player">Listen</a>
			</p>
		</blockquote>

		<div class="quote-player" id="quote-player">
			<button class="play"><span class="progress"></span><em>Listen</em></button>
			<audio>
				<source src="#" data-source="https://lightfootandwolfville.com/wp-content/themes/lightfoot/audio/peter-gamble-on-lightfoot-and-wolfville-vineyards.ogg" type="audio/ogg">
				<source src="#" data-source="https://lightfootandwolfville.com/wp-content/themes/lightfoot/audio/peter-gamble-on-lightfoot-and-wolfville-vineyards.mp3" type="audio/mpeg">
			</audio>

			<div class="title">
				<h1>A message from <cite>Dannie</cite></h1>
				<h2>CEO of Château de Sours</h2>

				<a class="listen-trigger" href="#quote-player">Listen</a> <a class="read-trigger" href="#quote-reader">Read</a>
			</div>
		</div>
	</figure>
</section>

<section id="the-wine" class="fullscreen parallax">
	<div class="intro">
		<h1>The Wine</h1>
		<p>Cabernet Franc and Petit Verdot for red wines; Sauvignon Blanc as well as Semillon for white wines</p>

		<a class="button white" href="<?php echo esc_url(get_permalink(get_page_by_title('Wines')));?>">Explore our wines</a>
		<span class="scroll-tip">Scroll</span>
	</div>
</section>

<section class="info">
	<figure class="bio-dynamic-cow-horns red">
		<img src="<?php echo get_theme_file_uri('assets/images/info/bio-dynamic-cow-horns.jpg');?>" alt="Bio dynamic cow horns">
		<figcaption>
			<button>Show information</button>
			<p>
				Biodynamic preparation (500). Cow horns filled with fresh organic manure from lactating cows. Buried on the fall equinox and unearthed in the spring – a concentrated microbial enrichment for the soil.
			</p>
		</figcaption>
	</figure>
	<figure class="basket-wine-press green">
		<img src="<?php echo get_theme_file_uri('assets/images/info/basket-wine-press.jpg');?>" alt="Basket wine press">
		<figcaption>
			<button>Show information</button>
			<p>
				A classic old European basket press; the finest machine for making traditionally styled fine wines.
			</p>
		</figcaption>
	</figure>
	<figure class="english-baby-doll-sheep blue">
		<img src="<?php echo get_theme_file_uri('assets/images/info/english-baby-doll-sheep.jpg');?>" alt="English Baby-Doll sheep">
		<figcaption>
			<button>Show information</button>
			<p>
				Our flock of Heritage English Babydoll sheep, for weed control and natural fertilizers in our vineyards.
			</p>
		</figcaption>
	</figure>
</section>

<section id="the-land" class="yield fullscreen parallax">
	<div class="intro">
		<h1>The Land</h1>
		<p>
			<span class="latitude">44.82360</span><span class="label">&deg; N</span>,
			<span class="longitude">-0.28132</span><span class="label">&deg; W</span>
		</p>
		<!-- <p><em>Hard soil</em> that suits our <em>work ethic</em> and our <em>grapes</em> perfectly.</p> -->
		<p>Lorem ipsum dolor sit amet, purus a donec lectus suspendisse nibh.</p>
		<span class="scroll-tip">Scroll</span>
	</div>
	<article>
		<div>
			<h1>Château de Sours Soil</h1>
			<div class="columns">
				<p>Château de Sours is an 85 hectares property carefully planted in high density with young and old Merlot, Cabernet Sauvignon, Cabernet Franc and Petit Verdot vines for our red wines and Sauvignon Blanc and Semillon vines for our white wines. </p>
  				<p>We have an exceptional 'terroir' surrounding the Château of thin soil over a deep limestone base, which produces great wines of complex and concentrated fruit flavours balanced by great mineral complexity and charm</p>
  				<p>In other areas of the property, the vines are planted on deep soil and clay which are more suited to the production of aromatic and fruit driven wines that offer a fresher and modern style for easy and early drinking.</p>
  				
				<!-- <p>We have 35+ acres of vines on two sites, one on the edge of Wolfville and the other in nearby Avonport. Both vineyards have breathtaking views of Cape Blomidon, and benefit from the Minas Basin's moderating impact on climate.
				<p>Another shared aspect of the terroir at both sites is the rare Wolfville Formation Soil that makes up a mere 3 percent of our province's soil spectrum. The upper root horizon consists of glacial till with coarse sandy loam, while the deep root horizon’s clay content provides ideal moisture retention.</p>
				<p>We believe being present on our land means recognizing the living memory of its past inhabitants while keeping in tune, daily, with the life of our soil and vines. Our main estate has been in Michael’s family for generations – working the land is in our blood. We’ve also found evidence of earlier history on both our sites, including Acadian and Planter artifacts and even an Acadian-era house foundation where our current winemaking facility stands.</p> -->
			</div>
		</div>
	</article>
</section>

<section class="info">
	<figure class="acadian-artifacts dark-green">
		<img src="<?php echo get_theme_file_uri('/assets/images/info/acadian-artifacts.jpg');?>" alt="Acadian artifacts">
		<figcaption>
			<button>Show information</button>
			<p>
				Acadian artifacts and evidence of farming activities used on our land, dating back to the Acadian period.
			</p>
		</figcaption>
	</figure>
	<figure class="hawk red">
		<img src="<?php echo get_theme_file_uri('/assets/images/info/hawk.jpg');?>" alt="Hawk">
		<figcaption>
			<button>Show information</button>
			<p>
				We naturally encourage hawks and eagles to our vineyards to help keep the eco system in balance.
			</p>
		</figcaption>
	</figure>
	<figure class="cellar-door green">
		<img src="<?php echo get_theme_file_uri('/assets/images/info/cellar-door.jpg');?>" alt="Cellar Door">
		<figcaption>
			<button>Show information</button>
			<p>
				Our speakeasy cellar door at Lightfoot & Wolfville Vineyards.
			</p>
		</figcaption>
	</figure>
</section>

<section id="the-name">
	<div class="intro">
		<h1>The Name</h1>
		<!-- <p>A light touch &amp; enlightened approach.</p> -->
		<p>Lorem ipsum dolor sit amet, purus a donec lectus suspendisse nibh.</p>
		<article>
			<div class="columns">
				<!-- <p>The Lightfoot name goes back eight generations in Wolfville. Originating in northern England, it referred to the swift-footedness of our forebears who traditionally worked as messengers. At Lightfoot &amp; Wolfville we like to think we bring a light touch and enlightened approach to both the agricultural and artisanal parts of our work – letting the land offer up its innate best, without subjecting it to aggressive inputs; letting our wines benefit from classic winemaking methods, emphasizing gentle gravity production and natural wild-yeast fermentations.</p> -->
				<p>Lorem ipsum dolor sit amet, purus a donec lectus suspendisse nibh. Justo ut dolor posuere bibendum, eu wisi. Velit ante integer,   tortor lacinia sed elit nullam vitae, est egestas. Dolor tempus parturient, sagittis odio amet pede volutpat gravida consectetuer, et nonummy egestas nullam, morbi semper vehicula nibh feugiat. Sed pede pede, purus aliquam sit eu hendrerit vestibulum, nulla erat maecenas, odio iusto vestibulum nulla dignissim, duis.</p>
			</div>
		</article>
	</div>
	<div class="logo-breakdown">
		<h2>The Brand</h2>
		<!--[if gte IE 9]><!-->
		<svg class="full-logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-2375.8 -908 5151.6 2216" xml:space="preserve">
			<!--contents scripted in -->
		</svg>
		<!--<![endif]-->

		<ul>
			<li class="thistle">
				<h2>Scottish Thistle</h2>
				<p>From our ancestry</p>
			</li>
			<li class="fleur-de-lis">
				<h2>Fleur-de-Lis</h2>
				<p>Homage to France &amp; Acadia</p>
			</li>
			<li class="butterfly">
				<h2>The Bee &amp; Butterfly</h2>
				<p>Vibrant organic agriculture</p>
			</li>
			<li class="wine-leaves">
				<h2>Vines &amp; Leaves</h2>
				<p>Reflecting our vineyards</p>
			</li>
			<li class="may-flower">
				<h2>The Mayflower</h2>
				<p>Symbol of Nova Scotia</p>
			</li>
		</ul>

		<p>
			<span class="ampersand">
				<img src="<?php echo get_theme_file_uri('/assets/images/ampersand.svg');?>" alt="Lightfoot &amp; Wolfville Vineyards Logo Ampersand">
			</span>
			The <em>ampersand (&amp;)</em> in our name <em>reflects</em> our belief in the pairing of <em>people and place</em>, and the close collaboration of the two <em>necessary to grow truly fine wines</em>.
		</p>
	</div>
</section>

<section id="the-vines" class="yield fullscreen parallax">
	<div class="intro">
		<h1>The Vines</h1>
		<!-- <p>The most <em>diverse portfolio</em> of European vinifera in <em>Atlantic Canada</em>.</p> -->
		<p>Lorem ipsum dolor sit amet, purus a donec lectus suspendisse nibh.</p>
		<span class="scroll-tip">Scroll</span>

		<figure class="zoom">
			<figcaption>
				<button>+</button>
				<table>
					<thead>
						<tr>
							<th>Block Facts</th>
							<th>45.1060° N, 64.2603° W</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row">Vineyard</th>
							<td>Oak Island Vineyard</td>
						</tr>
						<tr>
							<th scope="row">Variety</th>
							<td>Pinot Noir (Vinifera)</td>
						</tr>
						<tr>
							<th scope="row">Established</th>
							<td>2011</td>
						</tr>
						<tr>
							<th scope="row">Block Size</th>
							<td>1 hectare</td>
						</tr>
						<tr>
							<th scope="row">Vines used</th>
							<td>4 distinctive Dijon clones</td>
						</tr>
						<tr>
							<th scope="row">Root Stock</th>
							<td>Custom low vigor</td>
						</tr>
						<tr>
							<th scope="row">Trellising</th>
							<td>V.S.P. (Vertical Shoot Positioning)</td>
						</tr>
						<tr>
							<th scope="row">Pruning Method</th>
							<td>Cane</td>
						</tr>
						<tr>
							<th>Climate</th>
							<td>Maritime</td>
						</tr>
						<tr>
							<th>Growing Degree days</th>
							<td>1278 (2013)</td>
						</tr>
						<tr>
							<th>Row Orientation</th>
							<td>North/South</td>
						</tr>
						<tr>
							<th>Slope</th>
							<td>30%</td>
						</tr>
						<tr>
							<th>Soil</th>
							<td>Wolfville series</td>
						</tr>
					</tbody>
				</table>
			</figcaption>
		</figure>
	</div>
	<article>
		<div>
			<h1>Wine Growing</h1>
			<div class="columns">
				<p>In the vineyard, we work on a block by block basis according to the age and condition of the vines, the seasonal requirements and the great 'terroir' that exists here on our gently sloping and south facing vineyards.</p>
  				<p>We have re-introduced grass seeing within the rows and we manage the estate in a way that allows us to protect the environment, using only sustainable products and techniques. We also work in a way that protects and enhances our crop production and the quality of our fruit through the careful management and adjustment of the canopy and by de-budding, crop thinning or 'green harvesting' and by de-leafing, all only as required.</p>
			</div>
		</div>
	</article>
</section>

<section class="info">
	<figure class="grape-cluster green">
		<img src="<?php echo get_theme_file_uri('/assets/images/info/grape-cluster.jpg');?>" alt="Grape cluster">
		<figcaption>
			<button>Show information</button>
			<p>
				Sun-kissed Chardonnay ripening on a warm autumn afternoon under the watchful eye of the expert vineyard and winemaking team.
			</p>
		</figcaption>
	</figure>
	<figure class="crushed-grapes blue">
		<img src="<?php echo get_theme_file_uri('/assets/images/info/crushed-grapes.jpg');?>" alt="Crushed grapes">
		<figcaption>
			<button>Show information</button>
			<p>
				After gently separating juice from the grape skins, the remains (called pomace) become part of the compost that nourishes the next year's crop.
			</p>
		</figcaption>
	</figure>
	<figure class="wine-barriques red">
		<img src="<?php echo get_theme_file_uri('/assets/images/info/wine-barriques.jpg');?>" alt="Wine barriques">
		<figcaption>
			<button>Show information</button>
			<p>
				Élevage is the French term for the progression of wines from adolescence to maturity, under attentive winemaking. Wines can spend years aging in fine French barriques in our cellar.
			</p>
		</figcaption>
	</figure>
</section>

<section class="notice">
	<article>
		<div>
			<h1>Share our Journey</h1>
			<p>We look forward to <em>sharing our story</em> with you <em>leading up to</em> our official opening in the <em>spring of 2017</em>.</p>
			<p>You can keep up to date with our progress, and learn more about our vineyards and wines by following us <a href="https://twitter.com/chateaudesours">@lwwines on Twitter</a> and <a href="http://instagram.com/LWwines">lwwines on Instagram</a>. You should also <a href="http://eepurl.com/QdSHz">subscribe to our newsletter</a> and get an inside look at our vineyards and winemaking. It is our hope that by the time you and your friends uncork your first bottle of Lightfoot &amp; Wolfville, you'll know a little (or a lot!) about what's gone into making it.<br><br>
			Cheers,<br>
			Dannie Bergmann CEO of Château de Sours
			<span class="signature">
				<img src="<?php echo get_theme_file_uri('/assets/images/lightfoot-signatures.svg');?>" alt="Michael and Jocelyn Lightfoot signatures">
			</span>
			</p>
		</div>
	</article>
</section>
</main>

<?php get_footer();
