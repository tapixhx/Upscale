class AddPublishToAdvertisements < ActiveRecord::Migration[6.1]
  def change
    add_column :advertisements, :publish, :boolean
  end
end
