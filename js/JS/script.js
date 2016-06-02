var channelName = 'MontageRock';
var colCount = 0;
$(document).ready(function(){
		$.get(
			"https://www.googleapis.com/youtube/v3/channels",{
				part: 'contentDetails',
				forUsername: channelName,
				key:'AIzaSyBD6NNTsf5ntRqgXzzmC05IjnMp6k3YQqs'},
				function(data){
					$.each(data.items, function(i,item){
						console.log(item);
						pid = item.contentDetails.relatedPlaylists.uploads;
						getVids(pid);
					})
				}
		);

		function getVids(pid){
			$.get(
			"https://www.googleapis.com/youtube/v3/playlistItems",{
				part: 'snippet',
				maxResults: 3,
				playlistId: pid,
				key:'AIzaSyBD6NNTsf5ntRqgXzzmC05IjnMp6k3YQqs'},
				function(data){
					var output;
					$.each(data.items,function(i,item){
						console.log(item);
						videoThumbnail = item.snippet.thumbnails.medium.url;
						videoUrl = item.snippet.resourceId.videoId;

						output = '<a href="//www.youtube.com/embed/'+ videoUrl +'" data-toggle="lightbox" data-gallery="youtubevideos" class="col-sm-4"><img src="'+ videoThumbnail +'" class="img-responsive"/></a>';

						$('#results').append(output);
					})
				}
		);

		}
});