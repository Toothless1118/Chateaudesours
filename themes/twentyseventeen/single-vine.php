<?php
/**
 * The template for displaying all single wine
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package WordPress
 * @subpackage toothless
 * @since 1.0
 * @version 1.0
 */

get_header(); ?>
<main>
    <?php $post_id = get_the_ID();?>
	<header style="background-image: url(<?php the_field('image1', $post_id);?>);    background-position: left;">
		<h1><span class="sans">2018</span> <span><?php the_title();?></span></h1>

		<div class="links">
			<nav class="share">
				<ul>
					<li class="twitter">
						<a target="_blank" href="http://twitter.com/intent/tweet?url=https://www.chateaudesours.com">Tweet</a>
					</li>
					<li class="facebook">
						<a target="_blank" href="http://www.facebook.com/share.php?u=https://www.chateaudesours.com">Share</a>
					</li>
					<li class="pinterest">
						<a target="_blank" href="http://pinterest.com/pin/create/button/?url=https://www.chateaudesours.com">Pin</a>
					</li>
				</ul>
			</nav>
		</div>
	</header>
    <article role="main">
        <p>Château de Sours ensures the quality of its wines by concentrating the natural advantages of the vineyard into a relatively small annual production of red, white and rosé wines and our 'Reserve de Sours' sparkling rosé.</p>
        <p>e produce three Red, White and Rosé wines, each made through a blend of traditional rigour and innovative new-world flair, whilst our 'Reserve de Sours' Sparkling Rosé is produced using the method champenoise secondary fermentation in bottle, followed by 14 to 16 months on the lees, before the final disgorgement.</p>
        <p>Our premium aged La Source and Chateau de Sours vintages receive regular critical acclaim; whilst our Château de Sours rosé wine is often proclaimed the best in the world.</p>
        <!-- <p>Our Terroir Series showcases small-lot wines that speak of the land. Nova Scotia’s cool-climate provides the ideal conditions for creating complex, naturally balanced icewines with tremendous ageability.</p> -->
        <table>
            <tbody>
            <tr>
                <th>Varietal</th>
                <td>100% Vidal</td>
            </tr>
            <tr>
                <th>Appellation</th>
                <td>Château de Sours</td>
            </tr>
            <tr>
                <th>Vineyard</th>
                <td>Château de Sours</td>
            </tr>
            </tbody>
        </table>
        <?php echo $post->post_content;?>
    </article>
</main>
<?php get_footer();