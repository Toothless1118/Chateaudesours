<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Twenty_Seventeen
 * @since 1.0
 * @version 1.2
 */

?>


<footer role="contentinfo">
	<div class="subscribe">
		<h2>Keep up with the latest Château de Sours Vineyards news</h2>
		<div>
			<nav class="social">
				<ul>
					<li class="twitter"><a href="https://twitter.com/chateaudesours">Follow us on Twitter</a></li>
					<li class="instagram"><a href="http://instagram.com/chateaudesours">Follow us on Instagram</a></li>
				</ul>
			</nav>
			<form action="#" method="post" name="mc-embedded-subscribe-form" target="_blank" id="newsletter-signup" onSubmit="ga('send', 'event', 'Newsletter Form', 'Newsletter Signup');">
				<label for="mce-EMAIL">Email Address </label>
				<input type="email" value="" name="EMAIL" id="mce-EMAIL" placeholder="Your email address" required>
				<input type="text" class="hidden" name="b_1056293da33251bda9a959d5d_07f57a37a0" value="">
				<button type="submit" name="subscribe" id="mc-embedded-subscribe">Subscribe</button>
			</form>
		</div>
	</div>
	<nav role="navigation" class="jump-to">
		<ul id="menu-main-navigation-1" class="menu">
			<li class="current-menu-item current_page_item"><a href="<?php echo get_home_url();?>">Home</a></li>
			<li><a href="<?php echo esc_url(get_permalink(get_page_by_title('Wines')));?>">Our Wines</a></li>
			<li><a href="<?php echo esc_url(get_permalink(get_page_by_title('Team')));?>">Our Team</a></li>
			<li><a href="<?php echo esc_url(get_permalink(get_page_by_title('Press')));?>">Media Center</a></li>
			<li><a href="<?php echo esc_url(get_permalink(get_page_by_title('Contact Us')));?>">Contact Us</a></li>
		</ul>		
	</nav>

	<section class="vcard">
		<h1 class="fn org"><em>Château de Sours</em> Vineyards</h1>

		<div class="adr">
			<span class="street-address">33750 </span><br>
			<span class="locality">Saint-Quentin-de-Baron</span>, <br>
			<span class="country-name">France</span><br>
		</div>
		<span class="tel">+33(0)5 57 24 10 81</span><br>
		<a class="email" href="&#109;ailto:info&#064;chateaudesours.com">email us</a> | <a class="press-kit" href="/press">Press kit</a>
	</section>

	<small class="copyright">&copy; 2018 - All rights reserved Château de Sours</small>
</footer>

<?php wp_footer(); ?>

</body>
</html>
