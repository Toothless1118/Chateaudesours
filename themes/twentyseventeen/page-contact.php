<?php
/**
 * Template Name: Contact Us page template
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
<main id="default-page">
	<article role="main">
		<h1 class="main__title">Contact Us</h1>
        <!-- <h2 class="subheading__title">Hours of Operation</h2> -->
        <?php if( have_posts() && $post->post_content ) : ?>
            <?php 
                while ( have_posts() ) : the_post();
                    the_content(); 
                endwhile;
            ?>
        <?php endif; ?>
    </article>
</main>
<?php get_footer();