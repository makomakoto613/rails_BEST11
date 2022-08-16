class AddColumnToUniforms < ActiveRecord::Migration[6.1]
  def change
    add_column :uniforms, :user_id, :integer
  end
end
