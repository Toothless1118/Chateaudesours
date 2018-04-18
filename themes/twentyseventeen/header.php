<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Twenty_Seventeen
 * @since 1.0
 * @version 1.0
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js no-svg">
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">

<?php wp_head(); ?>
</head>
<body data-rsssl=1 <?php body_class();?>>
	<header role="banner" id="navigation">
		<a href="/" class="logo">Château de Sours</a>
		<nav role="navigation" class="jump-to">
			<ul id="menu-main-navigation" class="menu">
				<li class="current-menu-item current_page_item"><a href="<?php echo get_home_url();?>">Home</a></li>
                <li><a href="<?php echo esc_url(get_permalink(get_page_by_title('Wines')));?>">Our Wines</a></li>
                <li><a href="<?php echo esc_url(get_permalink(get_page_by_title('Team')));?>">Our Team</a></li>
                <li><a href="<?php echo esc_url(get_permalink(get_page_by_title('Press')));?>">Media Center</a></li>
                <li><a href="<?php echo esc_url(get_permalink(get_page_by_title('Contact Us')));?>">Contact Us</a></li>
            </ul>
        </nav>

		<section class="vcard">
			<a href="/" class="fn org"><em>Château de Sours</em> Vineyards</a>
			<div class="adr">
				<span class="street-address">33750 </span><br>
				<span class="locality">Saint-Quentin-de-Baron</span>, <br>
				<span class="country-name">France</span><br>
			</div>
			<span class="tel">+33(0)5 57 24 10 81</span><br>
			<a class="email" href="&#109;ailto:info&#064;chateaudesours.com">email us</a>
		</section>

		<nav class="social">
			<ul>
				<li class="twitter"><a href="https://twitter.com/chateaudesours">Follow us on Twitter</a></li>
				<li class="instagram"><a href="http://instagram.com/chateaudesours">Follow us on Instagram</a></li>
				<li class="newsletter"><a href="#newsletter-signup">Subscribe to our newsletter</a></li>
			</ul>
		</nav>
	</header>
