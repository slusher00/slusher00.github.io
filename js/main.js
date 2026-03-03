var scrollDur = 500
var headerHeight = 80

// logo highlight
$('#headerLogoLink').mouseenter(function() {
    $('#headerLogoBase').hide()
    $('#headerLogoHighlight').show()
})
$('#headerLogoLink').mouseleave(function() {
    $('#headerLogoBase').show()
    $('#headerLogoHighlight').hide()
})

// show all games
$('#showAllGamesButton').click(function() {
    $(this).hide()
    $('#hiddenGamesContainer').slideDown({
        start: function() {
          $(this).css('display','grid')
        }
    })
})

// call-to-action buttons
$('#collabButton, #applyButton').click(function(){
    // $('html, body').animate({
    //     scrollTop: $("#contactSectionContainer").offset().top
    // }, scrollDur)
    window.location = "mailto:contact@sworld.gg";
})

// nav links
$('.headerNavLink').click(function() {
    $('#mobileHeaderNav').slideUp();
})

$('.navAbout').click(function(){
    $('html, body').animate({
        scrollTop: $("#aboutSectionContainer").offset().top - headerHeight
    }, scrollDur)
})
$('.navGames').click(function(){
    $('html, body').animate({
        scrollTop: $("#gamesSection").offset().top - headerHeight
    }, scrollDur)
})
$('.navBrands').click(function(){
    $('html, body').animate({
        scrollTop: $("#brandsSectionContainer").offset().top - headerHeight
    }, scrollDur)
})
$('.navJoin').click(function(){
    $('html, body').animate({
        scrollTop: $("#joinSection").offset().top - headerHeight
    }, scrollDur)
})
$('.navContact').click(function(){
    $('html, body').animate({
        scrollTop: $("#contactSectionContainer").offset().top - headerHeight
    }, scrollDur)
})

// game capsule highlight
$('.gameCapsule').mouseenter(function() {
    $(this).css('border', '1px solid var(--white)')
    $(this).css('background-color', 'var(--border)')
    $(this).find('.gameCapsuleTitle').css('background-color', 'var(--white)')
    $(this).find('.gameCapsuleTitle').css('color', 'var(--dark-text)')
})
$('.gameCapsule').mouseleave(function() {
    $(this).css('border', '1px solid var(--border)')
    $(this).css('background-color', 'var(--dark-text)')
    $(this).find('.gameCapsuleTitle').css('background-color', 'var(--border)')
    $(this).find('.gameCapsuleTitle').css('color', 'var(--white)')
})

// mobile header nav
$('#hamburgerMenuButton').click(function() {
    $('#mobileHeaderNav').slideToggle(150);
});