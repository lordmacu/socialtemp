<div class="ui-block">
                    <article class="hentry post has-post-thumbnail">

                        <div class="post__author author vcard inline-items">
                            <img src="{{$post["user_image"]}}" width="30px" alt="author">

                            <div class="author-date">
                                <a class="h6 post__author-name fn" href="#">{{$post["user_name"]}}</a>
                                <div class="post__date">
                                    <time class="published" datetime="{{$post["created_at"]}}">
                                        {{$post["created_at"]}}
                                    </time>
                                </div>
                            </div>

                            <div class="more"><svg class="olymp-three-dots-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="{{asset('img/icons.svg')}}#olymp-three-dots-icon"></use></svg>
                                <ul class="more-dropdown">
                                    <li>
                                        <a href="#">Editar Post</a>
                                    </li>
                                    <li>
                                        <a href="#">Borrar Post</a>
                                    </li>
                                     
                                    
                                </ul>
                            </div>

                        </div>
                        <div class="content_post">
                          {{$post["text"]}}                                                 

                        </div>

                        
 
                    </article>
                </div>