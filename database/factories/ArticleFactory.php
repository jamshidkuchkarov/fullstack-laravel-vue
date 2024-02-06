<?php

namespace Database\Factories;

use App\Models\Article;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Article>
 */
class ArticleFactory extends Factory
{
    protected $model = Article::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'slug'=>$this->faker->slug,
            'title'=>$this->faker->title,
            'body'=>$this->faker->text,
            'description'=>$this->faker->text,
            'user_id'=>1
        ];
    }
}
