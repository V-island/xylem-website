$(document).ready(function() {
	// 热门视频 Tabs
	$(".toolbar [role='tab'] >li").click(function() {
		$(this).addClass('active').siblings().removeClass('active');
    
		$(".tab-content [role='tabpanel']").hide().eq($("[role='tab'] >li").index(this)).fadeIn();
	});
	var player = videojs('my-player');
});