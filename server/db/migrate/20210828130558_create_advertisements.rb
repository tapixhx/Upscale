class CreateAdvertisements < ActiveRecord::Migration[6.1]
  def change
    create_table :advertisements do |t|
      t.string :title
      t.string :image
      t.string :category
      t.string :content
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
