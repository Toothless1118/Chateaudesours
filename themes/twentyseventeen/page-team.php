<?php
/**
 * Template Name: Our Team page template
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage toothless
 * @since 1.0
 * @version 1.2
 */
get_header(); 
?>
    <main role="main">
		<section id="press-intro">
			<div class="intro fade">
				<h1>Lightfoot &amp; Wolfville</h1>
				<p>Our Team</p>
			</div>
			<!-- <article>
				<div>
					<h2>EST.&nbsp;2009</h2>
					<p>At <em>Lightfoot &amp; Wolfville</em> Vineyards we grow <em>handcrafted</em> small lot wines, with <em>individual</em> vineyard <em>block bottlings</em>.</p>
					<p>Our focus on classic vinifera includes Chardonnay, Pinot Noir, Riesling, and other German-styled whites specifically selected for our microclimates.</p>
					<p>We’re maximizing the expression of our wines by practicing biodynamic viticulture in some of the Annapolis Valley’s most privileged vineyards. Our intention from the beginning has been an unwavering dedication to quality throughout the wine’s journey.</p>
				</div>
			</article> -->
		</section>

		<section id="the-team">
			<div class="intro">
				<h1>The Team</h1>
				<p>Meet the Château de Sours team</p>
				<!-- <a class="button white" href="http://lightfootandwolfvillewines.com/press-kit/team/lightfoot-and-wolfville-team.zip">Download all team photos</a> -->
			</div>
			<article>
				<ul>
					<li>
						<a href="<?php echo get_theme_file_uri('assets/images/team/Dannie-Bergmann.jpg');?>" style="background-image: url(<?php echo get_theme_file_uri('assets/images/team/Dannie-Bergmann.jpg');?>)">
							<h2>Dannie Bergmann</h2>
						</a>
					</li>
					<li>
                        <a href="<?php echo get_theme_file_uri('assets/images/team/Aymeric-Roborel-de-Climens.jpg');?>" style="background-image: url(<?php echo get_theme_file_uri('assets/images/team/Aymeric-Roborel-de-Climens.jpg');?>)">
							<h2>Aymeric Roborel de Climens</h2>
						</a>
					</li>
					<li>
                        <a href="<?php echo get_theme_file_uri('assets/images/team/Hubert-de-Boüard.jpg');?>" style="background-image: url(<?php echo get_theme_file_uri('assets/images/team/Hubert-de-Boüard.jpg');?>)">
							<h2>Hubert de Boüard</h2>
						</a>
					</li>
				</ul>
			</article>
		</section>
	</main>

<?php get_footer();