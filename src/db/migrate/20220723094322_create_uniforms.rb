class CreateUniforms < ActiveRecord::Migration[6.1]
  def change
    create_table :uniforms do |t|
      t.integer :user_id
      t.integer :formation_post_id
      t.integer :coordinate_x
      t.integer :coordinate_y
      t.timestamps
    end
  end
end
