class CreateFormationPosts < ActiveRecord::Migration[6.1]
  def change
    create_table :formation_posts do |t|
      t.string :title
      t.text :body
      t.string :opponent
      t.numeric :offenseid
      t.numeric :deffenseid
      t.string :coordinates1

      t.timestamps
    end
  end
end
