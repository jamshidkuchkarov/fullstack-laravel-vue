<?php

namespace App\Http\Controllers;

use App\Http\Resources\ArticleResource;
use App\Models\Article;
use App\Traits\HttpResponses;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    use HttpResponses;
    public function index()
    {
        return $this->success(['articles'=>ArticleResource::collection(Article::all()),'article_count'=>Article::all()->count()]);
    }
}
