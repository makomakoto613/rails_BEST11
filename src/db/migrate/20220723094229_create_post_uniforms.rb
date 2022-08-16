class CreatePostUniforms < ActiveRecord::Migration[6.1]
  def change
    create_table :post_uniforms do |t|

      t.timestamps
    end
  end
end
