<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ArticleResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'slug'=>$this->slug,
            'title'=>$this->title,
            'body'=>$this->body,
            'description'=>$this->description,
            'user'=>$this->user,
            'created_at'=>$this->created_at
        ];
    }
}
