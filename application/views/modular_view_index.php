<!DOCTYPE html>
<html lang="en">
<?php $this->load->view("general_content_block/head");?>

<body class="home page-template page-template-template-microsite page-template-template-microsite-php page page-id-22 unselectable one-page-row scale-on-hover disabled-hover-icons dt-responsive-on srcset-enabled btn-flat custom-btn-color custom-btn-hover-color bold-icons phantom-fade phantom-shadow-decoration phantom-main-logo-on sticky-mobile-header top-header first-switch-logo-left first-switch-menu-right second-switch-logo-center second-switch-menu-left layzr-loading-on popup-message-style dt-fa-compatibility the7-ver-6.4.3.1 wpb-js-composer js-comp-ver-5.4.7 vc_responsive">
    <div id="page">
        <?php $this->load->view("general_content_block/navigation");?>

        <?php $this->load->view($destination["site"]);?>

        <?php $this->load->view("general_content_block/footer");?>

        <?php $this->load->view("general_content_block/scripts");?>
    </div>
</body>
</html>