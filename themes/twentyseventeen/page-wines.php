<?php
/**
 * Template Name: Wines page template
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
<main id="card-page">
	<h1 class="main__title">Wines</h1>
    <?php
        $wines_args = array(
            'post_type' => 'vine',
            'order' => 'ASC'
        );
        $product_query = new WP_Query($wines_args);
    ?>
	<ul class="card__container">
    <?php 
        if($product_query->have_posts()) : 
            while($product_query->have_posts()) : 
                $product_query->the_post();
                $wine = get_post();
                $post_id = $post->ID;
    ?>
		<li class="card">
            <a class="card__container--link" href="<?php echo esc_url(get_page_link($post_id));?>">Learn More about our <?php the_title();?></a>

            <div class="card__image" style="background-image: url('<?php the_field('image1', $post_id);?>');"></div>

            <div class="card__content">
                <!-- <p class="card__date">2015</p> -->
                <h2 class="card__title"><?php the_title();?></h2>

                <div class="card__excerpt">
                    <?php the_excerpt();?>
                </div>
            </div>
        </li>
    <?php
            endwhile;
        endif;
    ?>
	</ul>
	
	<section class="buy__here">
		<h2 class="main__title">Where To Buy</h2>
		<!-- <ul>
			<li><a href="https://liquid-assets-of-nova-scotia.myshopify.com/">Liquid Assets</a></li>
			<li><a href="https://bishopscellar.com/">Bishops Cellar</a></li>
			<li>The Shelf at Halifax Seaport Market</li>
			<li>Halifax Seaport Market</li>
			<li>Wolfville Farmer's Market</li>
			<li>Select NSLC Locations</li>
        </ul> -->
        <ul class="card__container">
            <li class="card">
                <h2>United Kingdom</h2>
                <div class="store">
                    <h4>Private Cellar</h4>
                    <a href="http://www.privatecellar.co.uk/">www.privatecellar.co.uk</a>
                </div>
                <div class="store">
                    <h4>Bon Coeur Fine Wines</h4>
                    <a href="http://www.bcfw.co.uk/">www.bcfw.co.uk</a>
                </div>
                <div class="store">
                    <h4>Goedhuis & Co</h4>
                    <a href="http://www.goedhuis.com/">www.goedhuis.com</a>
                </div>
                <div class="store">
                    <h4>Marks & Spencer On-Line</h4>
                    <a href="http://www.marksandspencer.com/">www.marksandspencer.com</a>
                </div>
                <div class="store">
                    <h4>Milton Sandford Wines</h4>
                    <a href="http://www.miltonsandfordwines.com/">www.miltonsandfordwines.com</a>
                </div>
                <div class="store">
                    <h4>L’Art du Vin - Scotland</h4>
                    <a href="http://www.aduv.co.uk/">www.aduv.co.uk</a>
                </div>
            </li>
            <li class="card">
                <h2>France</h2>
                <div class="store">
                    <h4>Anthony Barton Fine Wines</h4>
                    <p>Tel +33 (0)5 56 59 06 05</p>
                </div>
                <div class="store">
                    <h4>Boursot's  Wine Collection</h4>
                    <a href="http://www.boursot.co.uk/">www.boursot.co.uk</a>
                </div>
                <div class="store">
                    <h4>Eaux du Monde</h4>
                    <a href="http://www.eauxdumonde.fr/">www.eauxdumonde.fr</a>
                </div>
            </li>
            <li class="card">
                <h2>Hong Kong</h2>
                <div class="store">
                    <h4>Dairy Farm Group</h4>
                    <a href="http://www.dairyfarmgroup.com/">www.dairyfarmgroup.com</a>
                </div>
            </li>
            <li class="card">
                <h2>Taiwan</h2>
                <div class="store">
                    <h4>DHH Trading Company</h4>
                    <a href="http://www.dhh-trading.com.tw/">www.dhh-trading.com.tw</a>
                </div>
            </li>
            <li class="card">
                <h2>Ireland</h2>
                <div class="store">
                    <h4>O’Brien’s Wines</h4>
                    <a href="http://www.obrienswine.ie/">www.obrienswine.ie</a>
                </div>
            </li>
            <li class="card">
                <h2>Norway</h2>
                <div class="store">
                    <h4>Cask Norway</h4>
                    <a href="http://www.casknorway.no/">www.casknorway.no</a>
                </div>
            </li>
            <li class="card">
                <h2>Sweden</h2>
                <div class="store">
                    <h4>Cask Sweden Moestue</h4>
                    <a href="http://www.caskswedenmoestue.se/">www.caskswedenmoestue.se</a>
                </div>
            </li>
            <li class="card">
                <h2>Poland</h2>
                <div class="store">
                    <h4>Anthony Barton Fine Wines</h4>
                    <p>Tel +33 556 59 06 05</p>
                </div>
            </li>
            <li class="card">
                <h2>Channel Islands</h2>
                <div class="store">
                    <h4>Victor Hugo Wines</h4>
                    <a href="http://www.victor-hugo-wines.com/">www.victor-hugo-wines.com</a>
                </div>
            </li>
            <li class="card">
                <h2>Kenya</h2>
                <div class="store">
                    <h4>Paul Chemngorem at Domaine Kenya</h4>
                    <p>pkchemngorem@domainekenya.co.ke</p>
                </div>
            </li>
            <li class="card">
                <h2>USA</h2>
                <div class="store">
                    <h4>Old Bridge Cellars</h4>
                    <a href="http://www.obcwines.com/">www.obcwines.com</a>
                </div>
            </li>
            <li class="card">
                <h2>Barbados</h2>
                <div class="store">
                    <h4>Stansfield Scott</h4>
                    <a href="http://www.stansfieldscott.com/">www.stansfieldscott.com</a>
                </div>
            </li>
            <li class="card">
                <h2>Canada</h2>
                <div class="store">
                    <h4>OPIMIAN</h4>
                    <a href="http://www.opim.ca/">www.opim.ca</a>
                </div>
            </li>
            <li class="card">
                <h2>Australia</h2>
                <div class="store">
                    <h4>Robert Oatley Vineyards</h4>
                    <a href="http://www.robertoatley.com.au/">www.robertoatley.com.au</a>
                </div>
            </li>
            <li class="card">
                <h2>New Zealand</h2>
                <div class="store">
                    <h4>Vintners New Zealand Limited</h4>
                    <a href="http://www.vintners.co.nz/">www.vintners.co.nz</a>
                </div>
            </li>
            <li class="card">
                <h2>Dubai</h2>
                <div class="store">
                    <h4>African & Eastern</h4>
                    <a href="http://www.africanandeastern.com/">www.africanandeastern.com</a>
                </div>
            </li>
            <li class="card">
                <h2>Mexico</h2>
                <div class="store">
                    <h4>Vinos del Mundo</h4>
                    <a href="http://www.vinosdelmundo.com.mx/">www.vinosdelmundo.com.mx</a>
                </div>
            </li>
            <li class="card">
                <h2>Laos</h2>
                <div class="store">
                    <h4>The Apsara Hotel</h4>
                    <a href="http://www.theapsara.com/">www.theapsara.com</a>
                </div>
            </li>
        </ul>
	</section>
</main>

<?php get_footer();
